import { PropsWithChildren, memo } from "react";

import { ReactComponent as InformationCircleIcon } from "@/assets/information.svg";

export const AlertInfo = memo(function AlertInfo({
  children,
}: PropsWithChildren) {
  return (
    <div className="alert alert-info sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <InformationCircleIcon className="h-6 w-6 shrink-0 stroke-current" />
      <span>{children}</span>
    </div>
  );
});
