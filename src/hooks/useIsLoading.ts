import { useIsFetching } from "react-query";

export function useIsLoading(key: string[]) {
  const isFetching = useIsFetching({ queryKey: key });
  return isFetching > 0;
}
