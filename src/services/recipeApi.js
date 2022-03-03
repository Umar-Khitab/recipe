// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
const headers = {

    "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
	"x-rapidapi-key": "1120b2e5e0msh4364a50b3842e98p1aa755jsn79f72b593025"
}

const baseUrl = 'https://edamam-food-and-grocery-database.p.rapidapi.com'


const createRequest = (url) => ({ url, headers });

// Define a service using a base URL and expected endpoints
export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({baseUrl }),
  endpoints: (builder) => ({
    getRecipe: builder.query({
      // eslint-disable-next-line no-undef
      query: (endpoint) => createRequest(`/parser?ingr=+${endpoint}`),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipeQuery } = recipeApi