const decoder = new TextDecoder("utf-8");
let json;

try {
  json = await Deno.readFile(".github/workflows/repo-data-response.json");
  json = decoder.decode(data);
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
    await Deno.writeFile("src/data/repo-data.json", encoder.encoder(json.data));
    console.log("Saved response data:", encoder.encoder(json.data));
  } catch (error) {
    console.log("There was an error writing your JSON file:", error);
  }
}