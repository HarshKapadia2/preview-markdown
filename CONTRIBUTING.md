# Welcome, Contributors! 😃

-   Please be mindful of the [Code of Conduct](CODE_OF_CONDUCT.md) while interacting or contributing!
-   Issues can be found in the ['Issues' tab](https://github.com/HarshKapadia2/preview-markdown/issues).

## Tech Stack

-   React.js (Started with '[Create React App](https://create-react-app.dev/)' and written in JavaScript.)
-   CSS (vanilla)
-   Libraries used
    -   [Marked](https://marked.js.org/): To parse plaintext to raw HTML.
    -   [DOMPurify](https://github.com/cure53/DOMPurify): To sanitize generated raw HTML to prevent XSS attacks.

> NOTE: GitHub Actions has been set up on this repo for CI/CD, so a built web app does not have to be committed.

## Local Setup

-   Fork this repo. (Top right corner.)
-   Clone the forked repo using the [`git clone`](https://harshkapadia2.github.io/git_basics/#_git_clone) command.
-   Run `npm install` in the project directory to download all the dependencies.
-   Run `npm run start` in the project directory to start the development server.
    -   The files will be served at `localhost:<port_number_decided_by_server>/preview-markdown`.
-   Make contribution(s)

    -   **This project uses [Prettier](https://prettier.io/) to format code.** The [`.prettierrc`](.prettierrc) config file can be found in the root directory. Please use the Prettier's [VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) or [CLI](https://prettier.io/docs/en/cli.html) to format your code before committing.
    -   Write [meaningful commit messages](https://harshkapadia2.github.io/git_basics/#_git_commit) and include the number (`#`) of the issue being resolved (if any) at the end of the commit message.

        Eg: `:bug: fix: Resolve 'isCorrect' function error (#0)`

-   Optionally run `npm run build` to generate a production build.
    -   **Do not** commit this folder. (It is already present in [`.gitignore`](.gitignore).)
    -   To serve these files locally, run `serve -s build -p <any_port_number>`.
        -   If `serve` is not installed, install it **globally** using `npm install -g serve`. **Do not** install it locally as a dependency.
-   Open a Pull Request (PR).
    -   [Learn how to open a PR](https://github.com/firstcontributions/first-contributions).
    -   **Solve only one issue per PR, without any extra changes**.
    -   **Include extra changes in a separate PR.**

## Component Structure

![](https://user-images.githubusercontent.com/50140864/121245031-2defda80-c8bd-11eb-9d37-0da63637a6af.png)

## Further Help

If any further help is needed, do not hesitate to contact the author (Harsh Kapadia) via [OTC](https://otc.zulipchat.com), [Twitter](https://twitter.com/harshgkapadia), [LinkedIn](https://www.linkedin.com/in/harshgkapadia/) or e-mail (harshgkapadia@gmail.com). An [issue](https://github.com/HarshKapadia2/preview-markdown/issues) can be raised as well.
