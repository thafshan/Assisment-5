Overview / Decisions

1. Tooling:
   - Used Vite + React for a lightweight, fast dev environment.
   - Chose Vite because of fast dev reloads and small build output.

2. Custom Hook (useFetch):
   - File: src/hooks/useFetch.js
   - Responsibilities: accept a URL, fetch JSON, manage loading & error states, and expose a refetch function.
   - Implementation details: useState for state, useEffect to call fetch on mount / URL change, useCallback to memoize the fetch function.

3. Error & Loading Handling:
   - Explicit loading and error states are returned by the hook.
   - Consumer (Products component) shows a spinner while loading and a retry button on error.

4. Component (Products):
   - Simple UI to demonstrate hook usage: displays images, title and price.
   - Limits shown items to 20 to keep the UI manageable.

5. Deployment:
   - Deployed on Netlify using build command `npm run build` and publish folder `dist`.

6. Extensibility:
   - Hook returns `refetch` for manual refreshes and can be extended with options (headers, method, body) later.
