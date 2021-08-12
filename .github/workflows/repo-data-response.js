const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

let json;
let response;

try {
  json = await Deno.readFile(".github/workflows/repo-data-response.json");
  response = JSON.parse(decoder.decode(json));
} catch (error) {
  console.log("There was an error parsing the JSON response:", error);
}

if (response?.errors?.length) {
  console.log(
    "There was an error response from the API:",
    JSON.stringify(response.errors)
  );
} else {
  try {
    await Deno.writeFile(
      "src/data/repo-data.json",
      encoder.encode(JSON.stringify(response.data))
    );
  } catch (error) {
    console.log("There was an error writing your JSON file:", error);
  }
}
