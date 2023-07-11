import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function HeaderTitle({ children }: PropsWithChildren) {
  return (
    <Link to="/" className="text-2xl sm:text-4xl font-bold">
      {children}
    </Link>
  );
}
