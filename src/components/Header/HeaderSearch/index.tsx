import { HTMLAttributes } from "react";

interface HeaderSearchProps
  extends Pick<HTMLAttributes<HTMLInputElement>, "onChange">,
    Pick<HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  value: string;
  isLoading: boolean;
}

export function HeaderSearch({ value, onChange, onSubmit, isLoading }: HeaderSearchProps) {
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
