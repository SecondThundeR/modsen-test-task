import { useCallback, useState } from "react";

export function useOnLoad() {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = useCallback(() => setIsLoading(false), [setIsLoading]);

  return { isLoading, onLoad };
}
