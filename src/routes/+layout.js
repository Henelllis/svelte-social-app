export async function load({ fetch }) {
  const repsonse = await fetch("api/trends");
  const trends = await repsonse.json();

  return { trends };
}
