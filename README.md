![build branch parameter](https://github.com/Stezido/winona-raiders-website/workflows/Publish/badge.svg?branch=master)
![publish branch parameter](https://github.com/Stezido/winona-raiders-website/workflows/Build/badge.svg?branch=master)
# winona-raiders-website

This project build a react app for the Winona Raiders Mödling Frisbee Team and deploys it via github pages.

## UI-Framework Material UI

## CI/CD

This project is using github actions for continues integration. Following workflows are defined:

- Node.js - it build and test the project and is triggered for every master branch/ master pull request event.
- Push to FTP - it pushes the build folder to the ftp server where the website is hosted and is triggered for every release event.

## Contributer Setup

### Extensions

I'm using `Prettier-Code formatter` for proper formatting.
