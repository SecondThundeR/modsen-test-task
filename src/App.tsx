import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BookDetails } from "./routes/BookDetails";
import { Books } from "./routes/Books";
import { Error } from "./routes/Error";
import { NotFound } from "./routes/NotFound";
import { Root } from "./routes/Root";
import { RootHint } from "./routes/RootHint";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RootHint />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "books/:id",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
