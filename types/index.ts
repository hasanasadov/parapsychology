export type DetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export enum CardTypeDashboard {
  Example = "example",
}

export type SelectOptionType = {
  value: string;
  label: string;
};

export type QuestionType = {
  question: string;
  answer: string;
};

export type BlogCardProps = {
  className?: string;
  imageUrl: string;
  authorName: string;
  title: string;
  excerpt: string;
  onDetailsClick?: () => void;
  detailsLabel?: string;
  // If you prefer link-based navigation instead of onClick:
  href?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};