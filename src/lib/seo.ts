const DESCRIPTION_TAILS = [
  " Call us.",
  " Call today.",
  " Learn more.",
  " Get started.",
  " Contact us.",
  " Call us today.",
  " See our work.",
  " Ask us today.",
  " Get in touch.",
  " Request a quote.",
  " Talk to our team.",
  " Get a free quote.",
  " Talk with our team.",
  " Learn more about us.",
  " Request a free quote.",
  " Book a free estimate.",
  " Get a free estimate.",
  " Tell us about your project.",
  " Contact our team to get started.",
  " Request an on-site estimate.",
  " Get a free on-site estimate.",
  " Ask our Surrey team for help.",
  " Talk with our Surrey team about a free estimate.",
  " Talk with our team about your floor.",
  " Talk with us about sealing your concrete today.",
  " Learn more about us.",
  " Request a free estimate in Surrey, BC.",
  " Contact us for a free flooring estimate.",
  " Get a free estimate from our Surrey team.",
  " Request a free on-site estimate from our Surrey team.",
  " Contact Pacific Floors and Coatings for a free quote.",
];

export function metaDescription(base: string): string {
  const description = base.replace(/\s+/g, " ").trim();
  if (description.length >= 155) {
    if (description.length <= 159) return description;
    const limit = description.slice(0, 156);
    const boundary = limit.lastIndexOf(" ");
    const prefix = boundary >= 154 ? limit.slice(0, boundary) : limit;
    return `${prefix.trimEnd()}...`;
  }

  const direct = DESCRIPTION_TAILS.flatMap((tail) => {
    const candidate = `${description}${tail}`;
    return candidate.length >= 155 && candidate.length <= 159 ? [candidate] : [];
  });
  if (direct.length) return direct.sort((a, b) => b.length - a.length)[0];

  const shortened = DESCRIPTION_TAILS.flatMap((tail) => {
    const limit = description.slice(0, 159 - tail.length);
    const boundary = limit.lastIndexOf(" ");
    if (boundary < 80) return [];
    const prefix = limit.slice(0, boundary).replace(/[.!?]+$/, "");
    const candidate = `${prefix}.${tail}`;
    return candidate.length >= 155 && candidate.length <= 159 ? [candidate] : [];
  });
  if (shortened.length) return shortened.sort((a, b) => b.length - a.length)[0];

  const fallback = `${description} Contact Pacific Floors and Coatings for a free estimate.`;
  const limit = fallback.slice(0, 156);
  const boundary = limit.lastIndexOf(" ");
  const prefix = boundary >= 154 ? limit.slice(0, boundary) : limit;
  return `${prefix.trimEnd()}...`;
}

export const BUSINESS_NAME = "Pacific Floors and Coatings";
const TITLE_BRANDS = [BUSINESS_NAME, "Pacific Floors & Coatings", "Pacific Floors", "Pacific"];

/** "Keyword | Business name", always 60 characters or fewer. */
export function pageTitle(keyword: string): string {
  const kw = keyword.replace(/\s+/g, " ").trim();
  for (const brand of TITLE_BRANDS) {
    const t = `${kw} | ${brand}`;
    if (t.length <= 60) return t;
  }
  const short = kw.replace(/, BC$/, "");
  for (const brand of TITLE_BRANDS) {
    const t = `${short} | ${brand}`;
    if (t.length <= 60) return t;
  }
  return `${short} | Pacific`.slice(0, 60);
}

/** Keyword-rich description that ends with the business name, 159 characters or fewer. */
export function brandDescription(base: string): string {
  const text = base.replace(/\s+/g, " ").trim();
  const sentences = text.match(/[^.]+\.?/g)?.map((x) => x.trim()).filter(Boolean) ?? [text];
  const suffixes = [
    ` Call ${BUSINESS_NAME} for a free quote.`,
    ` Get a free estimate from ${BUSINESS_NAME}.`,
    ` Contact ${BUSINESS_NAME}.`,
    ` ${BUSINESS_NAME}.`,
  ];
  let best = "";
  for (let i = 1; i <= sentences.length; i++) {
    const body = sentences.slice(0, i).join(" ");
    for (const suffix of suffixes) {
      const d = body + suffix;
      if (d.length <= 159 && d.length > best.length) best = d;
    }
  }
  if (best) return best;
  const tail = ` ${BUSINESS_NAME}.`;
  const cut = sentences[0].slice(0, 159 - tail.length);
  const stop = Math.max(cut.lastIndexOf(", "), cut.lastIndexOf(" "));
  return `${cut.slice(0, stop).replace(/[.,;:\s]+$/, "")}.${tail}`;
}
