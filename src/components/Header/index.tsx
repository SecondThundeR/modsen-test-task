import { PropsWithChildren } from "react";

import { HeaderTitle } from "./HeaderTitle";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderControlsWrapper } from "./HeaderControlsWrapper";
import { HeaderSelectWrapper } from "./HeaderSelectWrapper";
import { HeaderSelect } from "./HeaderSelect";

export function Header({ children }: PropsWithChildren) {
  return (
    <div className="bg-base-300">
      <header className="container mx-auto py-8 flex flex-col justify-center items-center gap-4">
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
