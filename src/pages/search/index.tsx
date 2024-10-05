import SearchableLayout from "@/pages/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  return <h2>{q}를 검색 했습니다</h2>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
