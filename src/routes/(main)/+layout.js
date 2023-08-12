export async function load({ fetch }) {
  try {
    //TODO: THIS SOLVE THIS ISSUE BUT THIS IS SUSS AS HELL
    const repsonse = await fetch("/api/trends");
    const trends = await repsonse.json();

    return { trends };
  } catch (error) {
    //TODO LOOK INTO THIS

    return { trends: [] };
  }
}
