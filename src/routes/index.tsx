import { createBrowserRouter } from "react-router-dom";

import { BookDetails } from "@/components/BookDetails";
import { Books } from "@/components/Books";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { NotFound } from "@/components/NotFound";
import { Root } from "@/components/Root";
import { RootHint } from "@/components/RootHint";

import { ROUTES } from "@/constants/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.home,
        element: <RootHint />,
      },
      {
        path: ROUTES.books,
        element: <Books />,
      },
      {
        path: ROUTES.bookDetails,
        element: <BookDetails />,
      },
    ],
  },
  {
    path: ROUTES.all,
    element: <NotFound />,
  },
]);
