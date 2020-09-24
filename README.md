![build branch parameter](https://github.com/Stezido/winona-raiders-website/workflows/Publish/badge.svg)
![publish branch parameter](https://github.com/Stezido/winona-raiders-website/workflows/Build/badge.svg)
# winona-raiders-website

This project build a react app for the Winona Raiders Mödling Frisbee Team and deploys it via github pages to our ftp-server.

## UI-Framework Material UI

## CI/CD

This project is using github actions for continues integration. Following workflows are defined:

- Build: It builds the project and is triggered for every master branch/ master pull request event.
- Push: It pushes the build folder to the ftp server where the website is hosted and is triggered for every release event. It can be triggered manually too.

## Contributer Setup

### Extensions

I'm using `Prettier-Code formatter` for proper formatting.
