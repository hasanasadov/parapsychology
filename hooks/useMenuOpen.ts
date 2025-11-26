// hooks/useMenuOpen.ts
"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const useMenuOpen = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const isOpen = searchParams.get("menuOpen") === "true";

  const setOpen = (open: boolean) => {
    const params = new URLSearchParams(searchParams.toString());

    if (open) {
      params.set("menuOpen", "true");
    } else {
      params.delete("menuOpen");
    }

    const queryString = params.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(url, { scroll: false });
  };

  const toggle = () => setOpen(!isOpen);

  return { isOpen, setOpen, toggle };
};
