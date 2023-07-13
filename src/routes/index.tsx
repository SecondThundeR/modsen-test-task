import { createBrowserRouter } from "react-router-dom";

import { BookDetails } from "@/components/BookDetails";
import { Books } from "@/components/Books";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { NotFound } from "@/components/NotFound";
import { Root } from "@/components/Root";
import { RootHint } from "@/components/RootHint";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
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
