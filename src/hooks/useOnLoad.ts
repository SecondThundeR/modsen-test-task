import { useCallback, useState } from "react";

export function useOnLoad() {
  const [loading, setLoading] = useState(true);

  const onLoad = useCallback(() => setLoading(false), [setLoading]);

  return { loading, onLoad };
}
