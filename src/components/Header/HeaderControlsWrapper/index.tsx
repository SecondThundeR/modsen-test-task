import { PropsWithChildren } from "react";

export default function HeaderControlsWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-col sm:w-3/5 gap-2">{children}</div>;
}
