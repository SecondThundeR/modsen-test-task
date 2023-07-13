export function getPaginatorText(
  isFetchingNextPage: boolean,
  hasNextPage: boolean | undefined,
) {
  if (isFetchingNextPage) return "Loading more...";
  if (hasNextPage) return "Load More";
  return "Nothing more to load";
}
