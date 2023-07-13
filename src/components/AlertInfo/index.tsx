import { PropsWithChildren } from "react";

import { ReactComponent as InformationCircleIcon } from "@/assets/information.svg";

export function AlertInfo({ children }: PropsWithChildren) {
  return (
    <div className="alert alert-info sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <InformationCircleIcon />
      <span>{children}</span>
    </div>
  );
}
