import clsx from "clsx";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={ clsx("max-w-6xl px-4 mx-auto ", props.className) } >{props.children}</section>
  );
};  
