import { HTMLAttributes } from "react";

import { OptionItemArrayType } from "@/schemas/optionItem";

interface HeaderSelectProps extends Pick<HTMLAttributes<HTMLSelectElement>, "defaultValue"> {
  name: string;
  label: string;
  options: OptionItemArrayType;
}

export function HeaderSelect({ name, label, options, defaultValue }: HeaderSelectProps) {
  return (
    <div className="form-control grow">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select id={name} name={name} className="select select-bordered" defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
