// lib/legalPagesContent.ts
export type LegalPageKey =
  | "helpCenter"
  | "privacyPolicy"
  | "termsOfService"
  | "trustAndSafety"
  | "accessibility";

export interface LegalPageContent {
  title: string;
  content: string;
}

import { legalPagesContentData } from "@/data/legalPagesContentData";

export const legalPagesContent: Record<LegalPageKey, LegalPageContent> = legalPagesContentData;
