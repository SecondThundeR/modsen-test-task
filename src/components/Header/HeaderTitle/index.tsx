import { PropsWithChildren } from "react";

export function HeaderTitle({ children }: PropsWithChildren) {
  return <h1 className="text-2xl sm:text-4xl font-bold">{children}</h1>;
}
