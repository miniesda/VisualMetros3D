export async function GET(request, context) {
  // await the params
  const { id } = await context.params; 

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  const tibUrl = `https://www.tib.org/o/manager/stop-code/${id}/departures/ctmr4`;
  const tibRes = await fetch(tibUrl);

  if (!tibRes.ok) {
    return new Response(`Error fetching data: ${tibRes.statusText}`, { status: tibRes.status });
  }

  const data = await tibRes.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

// OPTIONS preflight
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}