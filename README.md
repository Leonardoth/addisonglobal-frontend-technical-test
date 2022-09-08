### Project Instructions:

https://github.com/addisonglobal/frontend-technical-test

### TODO

[x] Use Emotion to create styles

[ ] Make the code more readable

[ ] Add icons for buttons (Menu/Close/Remove)

[x] Add call to api

[ ] Add tests (Jest & cypress?)

[x] Add redux

[x] Add notification for when a bet is placed (bottom - slide up)

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

Most of what i'm doing is following [this repository](https://github.com/reduxjs/cra-template-redux-typescript)

EDIT: Adding redux was easier the next day, followed [this video](https://www.youtube.com/watch?v=udr2rx_B99w) to understand it better. Having to do some changes because i used redux-toolkit. (Basically using configureStore instead of createStore).
My state logic could be better but at the moment, this is the way that it worked.

Passing bets with marketName and Id to the store made easier to: - Access the Market Name on Betslip - Access which bet is selected on each market

Cons: - We do not have access to Event Name on Betslip at the moment (we can pass Event Name to market Component and send it to store, but i chose not to for now) - We cannot 'sort' our bets for Events, they are sorted by order of selection.

</details>

<details>
<summary>Design</summary>
At the moment i went for a basic design, resembling a soccer field, used a noise image generated from [this site](https://cssmatic.com/noise-texture) to create the background, used white strokes and black backgrounds with 0.2 alpha.

Maybe in the future i'll change the bets (inside betslip), changind the remove button to a red card or something similar.

</details>
