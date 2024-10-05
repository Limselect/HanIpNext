import SearchableLayout from "@/pages/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
