<p align="center">
  <a href="https://www.astraui.me/">
    <img src="https://res.cloudinary.com/dpgeyzgaw/image/upload/v1743809631/Astra/astra-logo.png" height="96">
    <h3 align="center">Astra UI</h3>
  </a>
</p>

<p align="center">
  Design. Build. Empower.
</p>

<p align="center">
  <strong>
    <a href="https://www.astraui.me/docs">Documentation</a> ∙ 
    <a href="https://www.astraui.me/docs/changelog">Changelog</a> ∙ 
    <a href="https://github.com/egeuysall/astraui/blob/development/CONTRIBUTING.md">Contributing</a>
  </strong>
</p>

## Astra UI

**Astra** UI is a beautifully designed UI library for Next.js. A set of accessible, production-ready components and a seamless code distribution platform. Open source. Open code. Ready to power your next idea.

### Features

- **Accessible Components**: All UI elements follow WCAG guidelines ensuring your applications are accessible to everyone.
- **Production-Ready**: Thoroughly tested components that are ready for immediate use in production environments.
- **Customizable**: Easily adapt components to match your brand's design system.
- **TypeScript Support**: Full TypeScript integration for improved developer experience.
- **Responsive Design**: Components that work flawlessly across all device sizes.
- **Themeable**: Comprehensive theming system to create consistent visual experiences.

### Getting Started

#### Prerequisites

Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [pnpm](https://pnpm.io/) (Preferred package manager)
- [Next.js](https://nextjs.org/) project

#### Installation

1. Install Astra in your Next.js project:

   ```bash
   pnpm dlx astui@latest add button
   ```
2. Import and use Astra components in your project:

    ```tsx
    import { Button } from "@/components/ui/button"
    import { Card } from "@/components/ui/card"
  
    export default function HomePage() {
      return (
        <Card>
          <h1>Welcome to my app</h1>
          <Button>Get Started</Button>
        </Card>
      );
    }
    ```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for production-grade applications.
- **TypeScript**: Strongly typed programming language for JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **pnpm**: Fast, disk space efficient package manager.
- **Vercel**: Platform for frontend frameworks and static sites.
- **GitHub**: Code hosting platform for version control and collaboration.

## License

This project is licensed under the **[Apache 2.0 License](./LICENSE)**.

## Documentation

For more detailed information about using and contributing to Astra, please visit the **[documentation](https://www.astraui.me/docs))**.

## Acknowledgments

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel
