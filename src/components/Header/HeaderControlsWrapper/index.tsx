import { HTMLAttributes, PropsWithChildren, memo } from "react";

interface HeaderControlsWrapperProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLFormElement>, "onSubmit"> {}

export const HeaderControlsWrapper = memo(function HeaderControlsWrapper({
  children,
  onSubmit,
}: HeaderControlsWrapperProps) {
  return (
    <div className="flex flex-col gap-2 sm:w-3/5">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
});
