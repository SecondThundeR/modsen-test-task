import { PropsWithChildren, memo } from "react";

import { HeaderTitle } from "./HeaderTitle";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderControlsWrapper } from "./HeaderControlsWrapper";
import { HeaderSelectWrapper } from "./HeaderSelectWrapper";
import { HeaderSelect } from "./HeaderSelect";

const MemoizedHeader = memo(function Header({ children }: PropsWithChildren) {
  return (
    <div className="bg-base-300">
      <header className="container mx-auto flex flex-col items-center justify-center gap-4 py-8">
        {children}
      </header>
    </div>
  );
});

export const Header = Object.assign(MemoizedHeader, {
  Title: HeaderTitle,
  Search: HeaderSearch,
  ControlsWrapper: HeaderControlsWrapper,
  Select: HeaderSelect,
  SelectWrapper: HeaderSelectWrapper,
});
