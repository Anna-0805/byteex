# Product Landing Page with Headless CMS (Sanity)

This is a high-performance product landing page built in fulfillment of the Byteex development test requirements.

## Live Demo
- **URL:** [https://byteex-yn48.vercel.app]

## Tech Stack
- **Frontend & App Architecture:** Next.js ( React 19, TypeScript)
- **Styling:** Tailwind CSS v4, custom SCSS/CSS modules
- **CMS:** Sanity v3 (`next-sanity`) integrated directly into the app structure
- **Deployment:** Vercel

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anna-0805/byteex.git
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root folder and add your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   Open [http://localhost:3000/studio](http://localhost:3000/studio) to access the embedded Sanity Studio admin panel.

##  Project Structure
- `/app` - Next.js App Router pages and global styles (Tailwind v4 layout)
- `/sanity` - Sanity configuration files, schemas, and content definitions
- `/components` - Isolated, reusable UI sections (Hero, Proud, FAQ, FinalCTA)
- `/public` - Local assets, including the `Sofia Pro` typography configuration