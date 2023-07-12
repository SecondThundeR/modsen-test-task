import { HTMLAttributes } from "react";

import { useIsEmpty } from "@/hooks/useIsEmpty";

interface HeaderSearchProps
  extends Pick<HTMLAttributes<HTMLInputElement>, "defaultValue"> {
  isLoading: boolean;
}

export function HeaderSearch({ defaultValue, isLoading }: HeaderSearchProps) {
  const { isEmpty, onChange } = useIsEmpty({ defaultValue });

  return (
    <div className="join w-full">
      <input
        id="q"
        name="q"
        type="text"
        onChange={onChange}
        className="input-bordered input join-item w-full"
        placeholder="Enter book name"
        defaultValue={defaultValue}
      />
      <button
        type="submit"
        className="btn-primary join-item btn"
        disabled={isEmpty || isLoading}
      >
        Search
      </button>
    </div>
  );
}
