"use client";

// import { educationExperience } from "@/constants/experience";
import { CertificateGetItems } from "@/actions/certificates";
import { CardTypeDashboard } from "@/types";
import { AddDashboardItem } from "./_components/AddDashboardItem";
import { CardDashboard } from "./_components/CardDashboard";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Certificate } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
  if (isLoading) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center text-center ">
        <h1 className="text-3xl font-semibold  animate-ping">Loading</h1>
      </div>
    );
  }
  return (
    <div className="md:px-8 pt-4 min-h-[90vh]">
      <div className="text-4xl mb-10 flex items-center gap-2 justify-between">
        <h1>Certificates</h1>
        <AddDashboardItem
          type={CardTypeDashboard.Certificate}
          newItem={newItem}
          setNewItem={setNewItem}
        />
      </div>
      <div className="flex flex-col gap-4">
        {newItem && (
          <CardDashboard
            item={newItem}
            type={CardTypeDashboard.Certificate}
            setNewItem={setNewItem}
          />
        )}
        {/* {(!data?.length || isError ? educationExperience : data)?.map( */}
        {data?.map((item) => (
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
