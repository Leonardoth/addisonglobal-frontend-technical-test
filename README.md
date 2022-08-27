### Project Instructions:

https://github.com/addisonglobal/frontend-technical-test

### TODO

[x] Use Emotion to create styles

[ ] Make the code more readable

[x] Add call to api

[ ] Add tests (Jest & cypress?)

[ ] Add redux

[ ] Add notification for when a bet is placed (bottom - slide up)

### Problems

### How To run

```
yarn install
yarn start
```

### How to test

```
TODO
```

### Challenges and Choices

<details>
<summary>Technologies</summary>
I read that the company uses Emotion, Cypress, TypeScript and Jest alongside React, so I'm using the same stack and learning as i go.
</details>

<details>
<summary>Styling</summary>
I tried to use css props from @emotion but had some troubles with typescript, i opted for trying styled components because of my familiarity with styled-components library and had success.
</details>

<details>
<summary>State Managing</summary>
I know that for this project contextApi would be more than enough but i'm using it only as UIContext.
I'll use redux for global states not UI related.
</details>

<details>
<summary>Redux</summary>
So, redux is REALLY complicated for me atm, idk if it's because i'm tired, but i added react-redux, then redux toolkit, then redux @types, the types from /types/ started to not get recognized, so i have to manually import them everywhere that they are being used. This makes me think that i'm doing something wrong.

At the moment my goal is to make redux work for managing the bets.

Later i'll add tests and start to study redux and typescript better. So be ready for some pasta!

Most of what i'm doing is following this repository https://github.com/reduxjs/cra-template-redux-typescript

</details>
