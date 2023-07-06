import { ChangeEvent } from "react";
import { OptionItem } from "../../../types/optionItem";

interface HeaderSelectProps {
  label: string;
  options: OptionItem[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function HeaderSelect({ label, options, value, onChange }: HeaderSelectProps) {
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
