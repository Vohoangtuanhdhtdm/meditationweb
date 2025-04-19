import { createFileRoute } from "@tanstack/react-router";
import DMTPage from "../Content/DMTPage";

export const Route = createFileRoute("/dmt")({
  component: DMTPage,
});
