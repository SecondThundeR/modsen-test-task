import { ChangeEvent, FormEvent } from "react";

interface HeaderSearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function HeaderSearch({ value, onChange, onSubmit, isLoading }: HeaderSearchProps) {
  return (
    <form className="join" onSubmit={onSubmit}>
      <input
        className="input input-bordered join-item w-full"
        placeholder="Enter book name"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-primary join-item" disabled={value.length === 0 || isLoading}>
        Search
      </button>
    </form>
  );
}
