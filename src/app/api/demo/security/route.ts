import { demoSecurities } from "@/content/demos";
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
  if (!rateLimit(`security:${key}`)) return demoLimitedResponse();

  const q = new URL(request.url).searchParams.get("q")?.trim().toLowerCase() ?? "";
  if (!q) {
    return Response.json(
      { error: "Enter a security, ISIN or issuer. Try “demo bond”." },
      { status: 400 },
    );
  }

  const match = demoSecurities.find((item) =>
    item.query.some((term) => q.includes(term) || term.includes(q)),
  );

  if (!match) {
    return Response.json(
      {
        error:
          "No demonstration record for that query. Try “demo bond”, “XS0000000001” or “Allfunds”.",
      },
      { status: 404 },
    );
  }

  return Response.json({
    security: match.security,
    type: match.type,
    price: match.price,
    bidOffer: match.bidOffer,
    currency: match.currency,
    settlement: match.settlement,
  });
}
