export function GET() {
  return new Response("google.com, pub-6651461551545723, DIRECT, f08c47fec0942fa0\n", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
