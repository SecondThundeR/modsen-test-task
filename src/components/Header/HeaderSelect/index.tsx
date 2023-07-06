import { HTMLAttributes } from "react";
import { OptionItemArrayType } from "../../../schemas/optionItem";

interface HeaderSelectProps extends Pick<HTMLAttributes<HTMLSelectElement>, "onChange"> {
  label: string;
  options: OptionItemArrayType;
  value: string;
}

export function HeaderSelect({ label, options, value, onChange }: HeaderSelectProps) {
  return (
    <div className="form-control grow">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select className="select select-bordered" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
