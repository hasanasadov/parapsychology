export const formatDateInput = (date: Date) => {
  // return date.toISOString().slice(0, 7);
  // return date.toISOString().split("T")[0];
  return date;
};

export const confirmAction = (message: string): boolean => {
  return window.confirm(message);
};

export const trimFormData = (data: {
  code: string;
  fullName: string;
  courseName: string;
  issuedAt: Date;
  fileUrls: string[];
}) => {
  return {
    code: data.code.trim(),
    fullName: data.fullName.trim(),
    courseName: data.courseName.trim(),
    issuedAt: new Date(data.issuedAt),
    fileUrls: data.fileUrls
      .map((url) => url.trim())
      .filter((url) => url !== ""),
  };
};
