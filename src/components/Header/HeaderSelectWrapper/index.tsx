import { PropsWithChildren } from "react";

export default function HeaderSelectWrapper({ children }: PropsWithChildren) {
  return <div className="flex gap-4">{children}</div>;
}
