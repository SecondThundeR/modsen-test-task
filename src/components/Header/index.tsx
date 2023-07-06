import { PropsWithChildren } from "react";

import HeaderTitle from "./HeaderTitle";
import HeaderSearch from "./HeaderSearch";
import HeaderControlsWrapper from "./HeaderControlsWrapper";
import HeaderSelectWrapper from "./HeaderSelectWrapper";
import HeaderSelect from "./HeaderSelect";

export default function Header({ children }: PropsWithChildren) {
  return (
    <div className="bg-slate-300">
      <div className="container mx-auto py-8 flex flex-col justify-center items-center gap-2 sm:gap-4">{children}</div>
    </div>
  );
}

Header.Title = HeaderTitle;
Header.Search = HeaderSearch;
Header.ControlsWrapper = HeaderControlsWrapper;
Header.Select = HeaderSelect;
Header.SelectWrapper = HeaderSelectWrapper;
