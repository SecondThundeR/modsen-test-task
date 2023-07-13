import { PropsWithChildren, memo } from "react";
import cn from "classnames";

import { Spinner } from "@/components/Spinner";

interface CoverLoaderProps extends PropsWithChildren {
  isLoading: boolean;
  classNames?: string;
}

export const CoverLoader = memo(function CoverLoader({
  children,
  isLoading,
  classNames,
}: CoverLoaderProps) {
  return (
    <>
      <div
        className={cn("flex justify-center", classNames, {
          hidden: !isLoading,
        })}
      >
        <Spinner />
      </div>
      {children}
    </>
  );
});
