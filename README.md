![build branch parameter](https://github.com/Stezido/winona-raiders-website/workflows/Build/badge.svg)
![publish branch parameter](https://github.com/Stezido/winona-raiders-website/workflows/Publish/badge.svg)
# winona-raiders-website

This project builds an astro application for the Winona Raiders Mödling Frisbee Team and deploys it via github to our ftp-server.

## Tech Stack

Astro, React and Tailwind - Keenslider for the carousel

## CI/CD

This project is using github actions for continues integration. Following workflows are defined:

- Build: It builds the project and is triggered for every master branch/ master pull request event.
- Push: It pushes the build folder to the ftp server where the website is hosted and is triggered for every release event. It can be triggered manually too.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).
