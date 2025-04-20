export async function fetchRecipes() {
  // Fetch recipes from the API
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  return res.json();
}
