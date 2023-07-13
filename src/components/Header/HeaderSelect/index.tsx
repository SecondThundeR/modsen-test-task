import { HTMLAttributes } from "react";

import { OptionItem } from "@/types/optionItem";

interface HeaderSelectProps
  extends Pick<HTMLAttributes<HTMLSelectElement>, "defaultValue"> {
  name: string;
  label: string;
  options: OptionItem[];
}

export function HeaderSelect({
  name,
  label,
  options,
  defaultValue,
}: HeaderSelectProps) {
  return (
    <div className="form-control grow">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        id={name}
        name={name}
        className="select-bordered select"
        defaultValue={defaultValue}
      >
        {options.map((option) => {
          const { id, value, title } = option;
          return (
            <option key={id} value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
