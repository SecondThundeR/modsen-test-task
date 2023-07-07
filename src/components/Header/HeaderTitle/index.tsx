import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function HeaderTitle({ children }: PropsWithChildren) {
  return (
    <Link to="/">
      <h1 className="text-2xl sm:text-4xl font-bold">{children}</h1>
    </Link>
  );
}
