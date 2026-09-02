import { demoSettlements } from "@/content/demos";
import {
  demoDisabledResponse,
  demoLimitedResponse,
  getClientKey,
  isDemoEnabled,
  rateLimit,
} from "@/lib/demo-guard";

export async function GET(request: Request) {
  if (!isDemoEnabled()) return demoDisabledResponse();

  const key = getClientKey(request);
  if (!rateLimit(`settlement:${key}`)) return demoLimitedResponse();

  const q = new URL(request.url).searchParams.get("q")?.trim().toLowerCase() ?? "";
  if (!q) {
    return Response.json(
      { error: "Enter a security or ISIN. Try “demo bond”." },
      { status: 400 },
    );
  }

  const match = demoSettlements.find((item) =>
    item.query.some((term) => q.includes(term) || term.includes(q)),
  );

  if (!match) {
    return Response.json(
      {
        error:
          "No demonstration route for that query. Eligibility is security-specific.",
      },
      { status: 404 },
    );
  }

  return Response.json({
    security: match.security,
    eligibility: match.eligibility,
    depository: match.depository,
    route: match.route,
    qualified: match.qualified,
  });
}
