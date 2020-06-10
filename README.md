# Introduction

Co-up is an application that helps communities manage stakeholder voting and funding. Homeowner associations, condo boards, and community co-ops can use this tool to help facilitate decision making and encourage shared fundraising.

(**NOTE**: This project is currently in alpha, under heavy development. Security and privacy are not robust)

## Instructions

- Log in using a social provider (more options coming soon)
- Visit the "Topics" page, then create a new topic on which you'd like community feedback. Set an appropriate reward to encourage member partipation (to be received when the topic closes).
- Add proposals to the topic including the proposal rationale
- Use your "Tickets" to vote on the proposals you care about

**Goal**: The goal of the project is enable non-technical people to reap the benefits of Quadratic voting and Quadratic finance without them needing to learn those concepts first. The application is designed to flexibly meet different use cases, while nudging both facilitators and community members to participate.

### Features and roadmap

- Simple login with oAuth + AWS Amplify. Users start with an initial monthly amount of ticket credits.
- Create and view any number of topics. Each topic may have any number of proposals from members. Each topic can have an arbitrary reward tickets that are rewarded to members who engaged before the topic was closed.
- Prefill the topic description based on topic "type" templates (work in progress).
- Quadratic voting on proposals with a fun ballot-stuffing micro-interaction that balances intuitiveness and ease-of-use with flexibililty.
- Quadratic voting (work in progress)
- Dark mode: advocacy themed (planned)
- Amenity booking auction (planned)

### Tech stack

- React (via Create React App)
- Grommet design system
- AWS Amplify (with Datastore for realtime/offline sync)
- Framer Motion
- Typescript

## More information

This application was created for the GitxChange hackathon, more details on the concepts and criteria can be found here: https://gitcoin.co/issue/RadicalxChange/GitxChange/1/4381

### Deployment

This project is configured to deploy automatically with amplify. Just fork the repository and update the reponame below:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/moarsel/co-up)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
