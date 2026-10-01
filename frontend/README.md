# Product Landing Page with Headless CMS (Sanity)

This is a high-performance product landing page built in fulfillment of the Byteex development test requirements.

## Live Demo
- **URL:** [https://byteex-yn48.vercel.app]

## Tech Stack
- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS v4
- **CMS:** Sanity v3 (Headless CMS)
- **Deployment & Grounding:** Server Components with on-demand caching

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-github-repository-url>
   cd <project-folder-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
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

##  Project Structure
- `/app` - Next.js App Router pages and global styles (Tailwind v4 layout)
- `/components` - Isolated, reusable UI sections (Hero, Proud, FAQ, FinalCTA)
- `/public` - Local assets, including the `Sofia Pro` typography configuration