/**
 * Formats a date string for display (e.g. "February 17, 2026").
 * Returns null if the input is empty; returns the raw string if parsing fails.
 */
export function formatDate(dateString: string | undefined): string | null {
  if (!dateString) return null;
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
