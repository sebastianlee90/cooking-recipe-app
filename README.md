# Recipe Explorer Lite

This project is a lightweight recipe browsing app built with Next.js 15, TypeScript, Tailwind CSS, and React Query. It allows users to browse a list of recipes, view detailed information, and submit feedback.

## Features

- **Home Page**: Displays a list of recipes fetched from TheMealDB API.
- **Recipe Detail Page**: Shows detailed information about a selected recipe.
- **Feedback Form**: Allows users to submit comments on recipes.
- **Loading and Error States**: Handles data-fetching states gracefully.

## Getting Started

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cooking-recipe-app
   ```
2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Data Fetching Approach

- **React Query**: Used for fetching and caching data from TheMealDB API.
  - `useQuery`: Fetches recipe lists and details.
  - `useMutation`: Handles feedback submission.

## Folder Structure

- **`src/app`**: Contains the main application files.
  - **`page.tsx`**: Home page displaying the list of recipes.
  - **`recipe/[id]/page.tsx`**: Dynamic route for recipe details.
- **`public`**: Static assets like images.

## Assumptions

- TheMealDB API is used as the data source.
- Feedback submission is simulated and does not persist data.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

To deploy the app, use platforms like Vercel. Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
