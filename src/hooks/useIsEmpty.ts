import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";

type UseIsEmptyOptions = Pick<HTMLAttributes<HTMLInputElement>, "defaultValue">;

export function useIsEmpty(options: UseIsEmptyOptions) {
  const [isEmpty, setIsEmpty] = useState(true);
  const { defaultValue } = options;

  useEffect(() => {
    if (defaultValue) setIsEmpty(false);
  }, [defaultValue]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) setIsEmpty(false);
    else setIsEmpty(true);
  };

  return { isEmpty, onChange };
}
