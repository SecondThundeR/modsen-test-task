import { ChangeEvent } from "react";

interface HeaderSearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // onClick
}

export default function HeaderSearch({ value, onChange }: HeaderSearchProps) {
  return (
    <div className="join">
      <input
        className="input input-bordered join-item w-full"
        placeholder="Enter book name"
        value={value}
        onChange={onChange}
      />
      <button className="btn btn-primary join-item">Search</button>
    </div>
  );
}
