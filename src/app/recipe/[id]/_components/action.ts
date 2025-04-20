export async function fetchRecipeDetails(id: string) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!response.ok) {
    throw new Error("API : Failed to fetch recipe details");
  }
  return response.json();
}

export async function submitFeedback(feedback: {
  recipeId: string;
  comment: string;
}) {
  // Simulate API call for feedback submission
  return new Promise((resolve) => setTimeout(() => resolve(feedback), 1000));
}
