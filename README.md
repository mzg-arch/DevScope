# DevScope

DevScope is an AI-powered GitHub repository analyzer that helps developers understand unfamiliar public repositories quickly.

Paste a public GitHub repository URL to explore its metadata, file structure, technology stack, architecture, and an AI-generated explanation.

## Features

- Analyze any public GitHub repository
- View repository metadata and statistics
- Browse and search the repository file tree
- Detect languages, frameworks, databases, and development tools
- Generate AI explanations using Google Gemini
- Show evidence paths supporting the analysis
- Responsive dashboard with loading and error states
- No GitHub login required

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

### Backend

- NestJS
- Node.js
- TypeScript
- GitHub REST API
- Google Gemini API
- Class Validator

## How It Works

1. The user pastes a public GitHub repository URL.
2. The NestJS API retrieves repository information from GitHub.
3. DevScope analyzes the repository files and technology stack.
4. Gemini uses the verified repository data to generate a clear explanation.
5. The results are displayed inside the DevScope dashboard.

## Project Structure

```text
DevScope/
├── backend/     # NestJS API and repository analysis
├── frontend/    # Next.js user interface
├── .gitignore
└── README.md