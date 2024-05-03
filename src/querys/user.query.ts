import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const userSelectQuery = (userId?: String) =>
  ({
    id: true,
    name: true,
    title: true,
    country: true,
    bio: true,
    email: true,
    image: true,
    createdAt: true,

    skills: {
      select: {
        name: true,
      },
      where: {
        userId: userId
          ? ({ equals: userId } as Prisma.StringFilter)
          : undefined,
      },
    },

    socials: {
      select: {
        linkedin: true,
        github: true,
        website: true,
        email: true,
      },
      where: {
        userId: userId
          ? ({ equals: userId } as Prisma.StringFilter)
          : undefined,
      },
    },
    preferences: {
      select: {
        visible: true,
        type: true,
        emploi: true,
        remote: true,
        onsite: true,
        leveljunior: true,
        levelmid: true,
        levelsenior: true,
        levelhith: true,
        model: true,
        montant: true,
      },
      where: {
        userId: userId
          ? ({ equals: userId } as Prisma.StringFilter)
          : undefined,
      },
    },
  } satisfies Prisma.UserSelect);


  
export const getAllUser = async (userId?: string) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        preferences: {
          some: {
            visible: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 8,
      select: userSelectQuery(userId),
      
    });
    return users;
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des utilisateurs."
    );
  }
};


export const getSingleUser = async (id: string, userId?: string) => {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: id,
      },

      select: {
        ...userSelectQuery(userId),
        socials: {
          select: {
            ...userSelectQuery(userId),
          },
        },
        skills: {
          select: {
            ...userSelectQuery(userId),
          },
        },
        preferences: {
          select: {
            ...userSelectQuery(userId),
          },
        },
      },
    });
    return users;
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des utilisateurs."
    );
  }
};
export const getUserP = async (userId?: string) => {
  try {
    const users = await prisma.user.findMany({
     
      select: {
        ...userSelectQuery(userId),
        socials: {
          select: {
            ...userSelectQuery(userId),
          },
        },
        skills: {
          select: {
            ...userSelectQuery(userId),
          },
        },
        preferences: {
          select: {
            ...userSelectQuery(userId),
          },
        },
      },
    });
    return users;
  } catch (error) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des utilisateurs."
    );
  }
};


export const getAllUsersData = async () => {
  try {
    const allUserData = await prisma.user.findMany({
      include: {
        skills: true,
        preferences: true,
        socials: true,
      },
    });

    return allUserData;
  } catch (error) {
    throw new Error(`Error retrieving all users data: ${error}`);
  }
};
