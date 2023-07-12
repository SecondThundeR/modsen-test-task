import { PropsWithChildren } from "react";

import { HeaderTitle } from "./HeaderTitle";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderControlsWrapper } from "./HeaderControlsWrapper";
import { HeaderSelectWrapper } from "./HeaderSelectWrapper";
import { HeaderSelect } from "./HeaderSelect";

export function Header({ children }: PropsWithChildren) {
  return (
    <div className="bg-base-300">
      <header className="container mx-auto flex flex-col items-center justify-center gap-4 py-8">
        {children}
      </header>
    </div>
  );
}

Header.Title = HeaderTitle;
Header.Search = HeaderSearch;
Header.ControlsWrapper = HeaderControlsWrapper;
Header.Select = HeaderSelect;
Header.SelectWrapper = HeaderSelectWrapper;
