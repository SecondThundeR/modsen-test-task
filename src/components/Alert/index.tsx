import { PropsWithChildren } from "react";
import { InformationCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

export function AlertError({ children }: PropsWithChildren) {
  return (
    <div className="alert alert-error sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <ExclamationCircleIcon className="h-6 w-6 stroke-current shrink-0" />
      <span>{children}</span>
    </div>
  );
}

export function AlertInfo({ children }: PropsWithChildren) {
  return (
    <div className="alert alert-info sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <InformationCircleIcon className="h-6 w-6 stroke-current shrink-0" />
      <span>{children}</span>
    </div>
  );
}
