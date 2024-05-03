import Footer from "@/components/elements/Footer";
import Hero from "@/components/elements/Hero";
import NavBar from "@/components/elements/NavBar";
import { Spacing } from "@/components/elements/Spacing";
import Testimonial from "@/components/elements/Testimonial";
import UserContent from "@/components/elements/UserContent";
import UserElement from "@/components/elements/UserElement";
// import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  // const users = await getCurrentUser();

  // console.log(users);

  return (
    <>
      <NavBar />
      <Hero />
      {/* <Spacing size="md" /> */}
      <UserContent />
      
      <Testimonial />
      <Footer />
    </>
  );
}
