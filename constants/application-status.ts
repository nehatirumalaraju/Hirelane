export const APPLICATION_STATUS = [
  "Applied",
  "Interviewing",
  "Offered",
  "Rejected",
] as const;

export type ApplicationStatus =
  (typeof APPLICATION_STATUS)[number];