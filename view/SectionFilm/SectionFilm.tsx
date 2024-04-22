"use client";
import { DataFetch } from "@/lib/Fetch/Film";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function SectionFilm() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{ gridTemplateColumns: "auto auto auto auto auto", gap: "16px" }}
        className="grid justify-center items-center grid-cols-4 gap-4"
      >
        <DataFetch />
      </div>
    </QueryClientProvider>
  );
}
