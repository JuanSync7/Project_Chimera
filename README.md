
# Project Chimera: AI Chip Design Strategy (Next.js)

This project is a Next.js application that serves as an interactive presentation of the "Project Chimera" strategic blueprint.

## Running the Application Locally

**Prerequisites:** Node.js and npm/yarn/pnpm.

1.  **Install Dependencies:**
    Open a terminal in the project's root directory and run:
    ```bash
    npm install
    ```

2.  **Set Up Environment Variables:**
    If the project requires API keys (e.g., for Genkit), create a `.env.local` file in the root directory and add the necessary variables. For example:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start the Next.js development server, typically on `http://localhost:9002`.

## Building for Production

To create a production-ready build of the application, run:
```bash
npm run build
```
This will generate an optimized build in the `.next/` directory.

To run the production server locally, use:
```bash
npm run start
```
