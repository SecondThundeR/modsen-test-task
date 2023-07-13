import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

export function HeaderTitle({ children }: PropsWithChildren) {
  return (
    <Link to={ROUTES.home} className="text-2xl font-bold sm:text-4xl">
      {children}
    </Link>
  );
}
