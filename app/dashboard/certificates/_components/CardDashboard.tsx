"use client";

import { Certificate } from "@prisma/client";
import { useDashboardMutation } from "@/hooks/useDashboardMutation";
import { CardTypeDashboard } from "@/types";
import React, { useState } from "react";
import { TitleSection } from "./TitleSection";
import { DateSection } from "./DateSection";
import { Actions } from "./Actions";
import {
  formatDateInput,
  confirmAction,
  trimFormData,
} from "@/utils/dashboardHelpers";
import { FilesSection } from "./FilesSection";

type Props = {
  item: Certificate & { isNew?: boolean };
  type: CardTypeDashboard;
  setNewItem?: (item: Certificate | null) => void;
};

export const CardDashboard = ({ item, type, setNewItem }: Props) => {
  const isNew = item?.["isNew"] === true;
  const [isEditing, setIsEditing] = useState(isNew);
  const [isDeleting, setIsDeleting] = useState(false);

  const [formState, setFormState] = useState({
    code: item.code,
    fullName: item.fullName,
    courseName: item.courseName,
    issuedAt: formatDateInput(new Date(item.issuedAt)),
    fileUrls: item.fileUrls.join(", "),
  });

  const handleChange = (
    field: keyof typeof formState,
    value: string | Date
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const { updateMutation, deleteMutation, createMutation } =
    useDashboardMutation(type, item.id);

  const onEdit = () => {
    setFormState({
      code: item.code,
      fullName: item.fullName,
      courseName: item.courseName,
      issuedAt: formatDateInput(new Date(item.issuedAt)),
      fileUrls: item.fileUrls.join(", "),
    });
    setIsEditing(true);
  };

  const onCancel = () => {
    if (!confirmAction("Are you sure you want to cancel the changes?")) return;
    if (setNewItem) {
      setNewItem(null);
    }
    setIsEditing(false);
  };

  const onDelete = () => {
    if (!confirmAction("Are you sure you want to delete this item?")) return;
    setIsDeleting(true);
    deleteMutation.mutate(undefined, {
      onSettled: () => setIsDeleting(false),
    });
  };

  const onSubmitEdit = () => {
    if (!confirmAction("Do you want to save the changes?")) return;

    const data = trimFormData({
      code: formState.code,
      fullName: formState.fullName,
      courseName: formState.courseName,
      issuedAt: new Date(formState.issuedAt),
      fileUrls: formState.fileUrls
        .split(",")
        .map((url) => url.trim())
        .filter((url) => url !== ""),
    });

    if (isNew) {
      createMutation.mutate(data, {
        onSuccess: () => {
          setIsEditing(false);
        },
      });
      if (setNewItem) {
        setNewItem(null);
      }
    } else {
      updateMutation.mutate(data, {
        onSuccess: () => {
          setIsEditing(false);
        },
      });
    }
  };

  const isPending =
    updateMutation.isPending ||
    deleteMutation.isPending ||
    createMutation.isPending;

  const fileUrlsArray = formState.fileUrls
    .split(",")
    .map((url) => url.trim())
    .filter((url) => url !== "");

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40 shadow-sm hover:shadow-lg transition-shadow duration-200 glass overflow-hidden">
      {/* yuxarı incə xətt + glow effekt */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
      <div className="pointer-events-none absolute -top-16 right-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative p-4 sm:p-5 md:p-6 flex flex-col gap-6 md:flex-row md:items-start">
        {/* SOL: tarix + actions (mobil üçün yuxarıda) */}
        

        {/* SAĞ: title + files */}
        <div className="w-full md:w-2/3 flex flex-col gap-5">
          <TitleSection
            isEditing={isEditing}
            code={formState.code}
            fullName={formState.fullName}
            setCode={(val) => handleChange("code", val)}
            setFullName={(val) => handleChange("fullName", val)}
            setCourseName={(val) => handleChange("courseName", val)}
            setFileUrls={(val) => handleChange("fileUrls", val.join(", "))}
            originalCode={item.code}
            originalFullName={item.fullName}
            originalCourseName={item.courseName}
            originalFileUrls={item.fileUrls}
            courseName={formState.courseName}
            fileUrls={fileUrlsArray}
          />

          <div className="border-t border-white/5 pt-4">
            <FilesSection
              isEditing={isEditing}
              fileUrls={fileUrlsArray}
              setFileUrls={(val) => handleChange("fileUrls", val.join(", "))}
              originalFileUrls={item.fileUrls}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-4 md:gap-6">
          <DateSection
            isEditing={isEditing}
            issuedAt={formState.issuedAt}
            originalIssuedAt={item.issuedAt}
            setIssuedAt={(val) => handleChange("issuedAt", val.toString())}
          />

          <Actions
            onEdit={onEdit}
            onCancel={isNew ? undefined : onCancel}
            isEditing={isEditing}
            isPending={isPending}
            isDeleting={isDeleting}
            onDelete={onDelete}
            onSubmitEdit={onSubmitEdit}
          />
        </div>
      </div>
    </div>
  );
};
