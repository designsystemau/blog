try {
  const json = await Deno.readJSON(".github/workflows/repo-data-response.json");
} catch (error) {
  console.log("There was an error parsing the JSON response:", error);
}

if (json?.errors.length) {
  console.log(
    "There was an error response from the API:",
    JSON.stringify(json.errors)
  );
} else {
  try {
    await Deno.writeJSON("src/data/repo-data.json");
  } catch (error) {
    console.log("There was an error writing your JSON file:", error);
  }
}
