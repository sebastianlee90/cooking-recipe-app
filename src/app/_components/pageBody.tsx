"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Link from "next/link";
import { fetchRecipes } from "./action";

export function PageBody() {
  const queryClient = new QueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchRecipes,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading recipes.</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Recipe Explorer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.meals.map((meal) => (
            <Link key={meal.idMeal} href={`/recipe/${meal.idMeal}`}>
              <div className="border p-4 rounded shadow hover:shadow-lg transition">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{meal.strMeal}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </QueryClientProvider>
  );
}
