import { Link } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-xl">Seems like you lost your path?</h1>
      <Link to={ROUTES.home}>
        <button className="btn-primary btn">Go to home page</button>
      </Link>
    </div>
  );
}
