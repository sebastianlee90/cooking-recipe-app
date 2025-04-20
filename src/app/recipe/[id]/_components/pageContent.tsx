"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchRecipeDetails, submitFeedback } from "./action";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { initialState } from "./context";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export function PageContent() {
  const { id } = useParams();
  const [form, setForm] = useState(initialState);
  const { data: recipe, isLoading } = useQuery<RecipeDetails>({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeDetails(id as string),
    enabled: !!id,
  });

  useEffect(() => {
    if (recipe) {
      setForm(recipe);
    }
  }, [recipe]);
  const [comment, setComment] = useState("");
  const { mutate, isPending } = useMutation({
    mutationFn: submitFeedback,
    onSuccess: () => {
      setComment("");
      toast.success("Feedback submitted successfully!");
    },
    onError: () => {
      toast.error("Failed to submit feedback. Please try again.");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-8">
      <Link href="/">
        <button
          type="button"
          className="flex items-center border p-2 rounded text-xs font-semibold text-gray-700 hover:bg-gray-100 transition whitespace-nowrap no-wrap"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Home
        </button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">{form.meals[0].strMeal}</h1>
      <img
        src={form.meals[0].strMealThumb}
        alt={`Image of ${form.meals[0].strMeal}`}
        className="w-full h-100 object-cover rounded mb-4"
      />
      <p className="mb-4">{form.meals[0].strInstructions}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {form.meals[0] &&
          Object.keys(form.meals[0])
            .filter(
              (key) =>
                key.startsWith("strIngredient") &&
                form.meals[0][key as keyof (typeof form.meals)[0]]
            )
            .map((key) => (
              <li key={key}>
                {form.meals[0][key as keyof (typeof form.meals)[0]]}
              </li>
            ))}
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">Submit Feedback:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (id) {
            mutate({ recipeId: id as string, comment });
          } else {
            toast.error("Recipe ID is missing. Unable to submit feedback.");
          }
        }}
        className="flex flex-col gap-4"
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="border p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
