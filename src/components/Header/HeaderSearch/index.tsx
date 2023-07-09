import { HTMLAttributes, useEffect, useState } from "react";

interface HeaderSearchProps extends Pick<HTMLAttributes<HTMLInputElement>, "defaultValue"> {
  isLoading: boolean;
}

export function HeaderSearch({ defaultValue, isLoading }: HeaderSearchProps) {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (defaultValue) setIsEmpty(false);
  }, [defaultValue]);

  return (
    <div className="join w-full">
      <input
        id="q"
        name="q"
        type="text"
        onChange={(e) => setIsEmpty(e.target.value === "")}
        className="input input-bordered join-item w-full"
        placeholder="Enter book name"
        defaultValue={defaultValue}
      />
      <button type="submit" className="btn btn-primary join-item" disabled={isEmpty || isLoading}>
        Search
      </button>
    </div>
  );
}
