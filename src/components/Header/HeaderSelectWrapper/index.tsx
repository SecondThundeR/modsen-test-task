import { PropsWithChildren, memo } from "react";

export const HeaderSelectWrapper = memo(function HeaderSelectWrapper({
  children,
}: PropsWithChildren) {
  return <div className="flex gap-4">{children}</div>;
});
