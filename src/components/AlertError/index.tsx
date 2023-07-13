import { memo } from "react";

import { ReactComponent as ExclamationCircleIcon } from "@/assets/exclamation.svg";

import { extractErrorMessage } from "@/utils/extractErrorMessage";

interface AlertErrorProps {
  error: unknown;
}

export const AlertError = memo(function AlertError({ error }: AlertErrorProps) {
  return (
    <div className="alert alert-error sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <ExclamationCircleIcon className="h-6 w-6 shrink-0 stroke-current" />
      <span>
        Something wrong happened! Error details: {extractErrorMessage(error)}
      </span>
    </div>
  );
});
