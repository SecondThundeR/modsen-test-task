import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-xl">Seems like you lost your path?</h1>
      <Link to="/">
        <button className="btn btn-primary">Go to home page</button>
      </Link>
    </div>
  );
}
