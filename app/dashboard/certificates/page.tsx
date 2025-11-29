"use client";

import { CertificateGetItems } from "@/actions/certificates";
import { CardTypeDashboard } from "@/types";
import { AddDashboardItem } from "./_components/AddDashboardItem";
import { CardDashboard } from "./_components/CardDashboard";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Certificate } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { toast } from "sonner";

export default function EduExperienceDashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.CERTIFICATE_DASHBOARD],
    queryFn: () => CertificateGetItems(),
  });

  if (!data && isError) {
    toast.error(
      "Failed to load certificate data. Displaying default experience."
    );
  }

  const [newItem, setNewItem] = useState<Certificate | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const isLoadingState = isLoading;

  // 🔍 Filtered data
  const filteredData = useMemo(() => {
    if (!data) return [];
    if (!searchTerm.trim()) return data;

    const q = searchTerm.toLowerCase();

    return data.filter((item) => {
      const code = item.code?.toLowerCase() ?? "";
      const fullName = item.fullName?.toLowerCase() ?? "";
      const courseName = item.courseName?.toLowerCase() ?? "";

      return code.includes(q) || fullName.includes(q) || courseName.includes(q);
    });
  }, [data, searchTerm]);

  if (isLoadingState) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center text-center ">
        <h1 className="text-3xl font-semibold animate-ping">Loading</h1>
      </div>
    );
  }

  return (
    <div className="md:px-8 pt-4 min-h-[90vh]">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl sm:text-4xl font-semibold">Certificates</h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end w-full sm:w-auto  ">
          <div className="w-full sm:w-64 md:w-72 relative glass-button">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-slate-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by name, code, course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-slate-900/40
                pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500
                focus:outline-none 
                transition-colors"
            />
          </div>

          <AddDashboardItem
            type={CardTypeDashboard.Certificate}
            newItem={newItem}
            setNewItem={setNewItem}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {newItem && (
          <CardDashboard
            item={newItem}
            type={CardTypeDashboard.Certificate}
            setNewItem={setNewItem}
          />
        )}

        {filteredData.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-6 text-sm text-slate-300 text-center">
            Heç bir sertifikat tapılmadı.
          </div>
        )}

        {filteredData.map((item) => (
          <CardDashboard
            key={item.id}
            item={item as Certificate}
            type={CardTypeDashboard.Certificate}
          />
        ))}
      </div>
    </div>
  );
}
