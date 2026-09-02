const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 20;
const hits = new Map<string, number[]>();

export function isDemoEnabled() {
  return process.env.DEMO_PUBLIC_ENABLED !== "false";
}

export function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export function rateLimit(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export function demoDisabledResponse() {
  return Response.json(
    { error: "Public demonstration is currently disabled." },
    { status: 503 },
  );
}

export function demoLimitedResponse() {
  return Response.json(
    { error: "Demonstration request limit reached. Try again later." },
    { status: 429 },
  );
}
