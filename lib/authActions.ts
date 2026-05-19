"use server";

const PASSWORDS: Record<string, string> = {
  airiq:        process.env.AIRIQ_PASSWORD        ?? "2618",
  "care-autor": process.env.CARE_AUTOR_PASSWORD   ?? "12345",
};

export async function validateCaseStudyPassword(
  slug: string,
  attempt: string
): Promise<boolean> {
  /* Small artificial delay prevents timing-based enumeration */
  await new Promise((r) => setTimeout(r, 150 + Math.random() * 150));
  const expected = PASSWORDS[slug];
  if (!expected) return false;
  return attempt === expected;
}
