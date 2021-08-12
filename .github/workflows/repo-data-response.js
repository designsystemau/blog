const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

let json;

try {
  json = await Deno.readFile(".github/workflows/repo-data-response.json");
  json = decoder.decode(json);
} catch (error) {
  console.log("There was an error parsing the JSON response:", error);
}

if (json?.errors?.length) {
  console.log(
    "There was an error response from the API:",
    JSON.stringify(json.errors)
  );
} else {
  try {
    await Deno.writeFile("src/data/repo-data.json", encoder.encode(json.data));
    console.log("Saved response data:", encoder.encode(json.data));
  } catch (error) {
    console.log("There was an error writing your JSON file:", error);
  }
}
