// In-memory unique IP tracker per festival greeting
const globalForViewLimiter = globalThis as unknown as {
  festivalViewCache?: Map<string, Set<string>>;
};

const viewCache =
  globalForViewLimiter.festivalViewCache ?? new Map<string, Set<string>>();

if (process.env.NODE_ENV !== "production") {
  globalForViewLimiter.festivalViewCache = viewCache;
}

/**
 * Checks if a view from a specific IP is unique for a given festival card slug.
 * Returns `true` if it's the first time this IP is viewing this card, `false` otherwise.
 */
export function isUniqueView(festival: string, slug: string, ip: string): boolean {
  if (!slug) return false;
  const key = `${festival.toLowerCase()}:${slug.toLowerCase()}`;
  const cleanIp = ip ? ip.split(",")[0].trim() : "127.0.0.1";

  let ipSet = viewCache.get(key);
  if (!ipSet) {
    ipSet = new Set<string>();
    viewCache.set(key, ipSet);
  }

  if (ipSet.has(cleanIp)) {
    return false; // Already viewed from this IP
  }

  // Register this IP as viewed
  ipSet.add(cleanIp);

  // Safety limit to prevent memory bloating
  if (ipSet.size > 20000) {
    const first = ipSet.values().next().value;
    if (first) ipSet.delete(first);
  }

  return true;
}
