# react-render

## Supabase (https://supabase.com/dashboard)

1. Create new project
2. Copy key and URL
3. Create new database `test` with some test data

## React app

1. Set up Supabase client (https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
   1. `npm install @supabase/supabase-js`
   2. `.env` file with `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` (set to values from step 2 of Supabase set up)
   3. [`supabase.js` file](./src/supabase.js)
   4. [`App.jsx` file](./src/App.jsx)
2. Test locally: `npm run dev`
3. Push up to GitHub

## render.com deployment

https://vitejs.dev/guide/static-deploy.html#render

1. New > Static Site
2. Set `Build Command` to `npm run build` and `Publish Directory` to `dist`
3. Under `Environments`, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` (set to values from step 2 of Supabase set up)
