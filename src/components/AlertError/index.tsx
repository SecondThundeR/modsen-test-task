import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

import { extractErrorMessage } from "@/utils/extractErrorMessage";

interface AlertErrorProps {
  error: unknown;
}

export function AlertError({ error }: AlertErrorProps) {
  return (
    <div className="alert alert-error sm:w-3/5 lg:w-2/5 xl:w-2/6">
      <ExclamationCircleIcon className="h-6 w-6 shrink-0 stroke-current" />
      <span>
        Something wrong happened! Error details: {extractErrorMessage(error)}
      </span>
    </div>
  );
}
