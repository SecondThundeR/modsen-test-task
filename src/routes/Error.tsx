import { useRouteError } from "react-router-dom";

import { extractErrorMessage } from "@/utils/errorMessage";

export function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="font-bold text-2xl">Something wrong happened!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p className="italic opacity-70">Details: {extractErrorMessage(error)}</p>
    </div>
  );
}
