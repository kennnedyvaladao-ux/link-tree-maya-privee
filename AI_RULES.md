# AI Rules for Development

This document outlines the tech stack and development rules for this application to ensure consistency and quality.

## Tech Stack

- **React**: Frontend framework (Version 19+).
- **TypeScript**: For type safety and better developer experience.
- **React Router**: For client-side routing and navigation.
- **Tailwind CSS**: Utility-first CSS framework for all styling.
- **shadcn/ui**: High-quality, accessible UI components (built on Radix UI).
- **Lucide React**: For a consistent and clean icon set.
- **Vite**: Modern build tool for fast development and bundling.

## Development Rules

### 1. Project Structure
- All source code must reside in the `src/` directory.
- **Pages**: Store page-level components in `src/pages/`.
- **Components**: Store reusable UI components in `src/components/`.
- **Main Entry**: The default landing page should be `src/pages/Index.tsx`.
- **Routing**: All application routes must be defined in `src/App.tsx`.

### 2. Styling and UI
- **Tailwind CSS**: Use Tailwind classes for all styling. Avoid writing custom CSS unless absolutely necessary.
- **shadcn/ui**: Leverage shadcn components for common UI patterns. 
- **Consistency**: Maintain a consistent design language by using Tailwind's theme and shadcn's design system.
- **Icons**: Always use `lucide-react` for icons.

### 3. Component Guidelines
- **Modularity**: Create small, focused components that do one thing well.
- **shadcn/ui Usage**: Do not edit the core shadcn components in `src/components/ui/`. If customization is needed, wrap them in a new component or use Tailwind classes to override styles.
- **Props**: Use TypeScript interfaces or types to define component props clearly.

### 4. Routing
- Keep the main routing logic in `src/App.tsx`.
- Use descriptive paths for new pages.

### 5. Coding Principles
- **Simplicity**: Do not over-engineer. Focus on the most direct and elegant solution to the user's request.
- **Readability**: Write clean, self-documenting code.
- **No Placeholders**: Never use placeholders or "TODO" comments. Every feature implemented must be fully functional.
- **Verification**: Always ensure components are properly imported and used in the main page or appropriate routes.
