// export const dynamic = "force-dynamic"; // Ensure API runs on each request

export async function GET() {
  try {
    // Define the Google Maps API URL
    const GOOGLE_MAPS_API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJn9FGVZrde0gRZAKmmvH4_Mo&fields=reviews&key=AIzaSyAX9bT208rk-JcH9aUEjUsicJlsWGctiqk`;

    // Fetch the Google Maps script
    const response = await fetch(GOOGLE_MAPS_API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/javascript" },
    });

    // Check for errors
    if (!response.ok) {
      throw new Error(`Google Maps API error: ${response.statusText}`);
    }

    const data = await response.text(); // Google returns raw JS, not JSON

    // Return the response with CORS headers for Safari
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    });
  } catch (error) {
    console.error("Error fetching Google Maps API:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Google Maps API" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
