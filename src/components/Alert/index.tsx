import { PropsWithChildren } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Alert({ children }: PropsWithChildren) {
  return (
    <div className="alert alert-info sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <InformationCircleIcon className="h-6 w-6 stroke-current shrink-0" />
      <span>{children}</span>
    </div>
  );
}
