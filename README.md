# Dev Notes

27 Feb 2025
Update:
Reintroduce myself to update the Game! Starting at least weekly development updates to the card-games folder

Next Tasks:
0. Don't make the move pile disappear, but have it highlight or something
2. Maybe can add slots for the aces, easy victory
3. Background image where the piles go, show empty columns when the cards are removed
4. Maybe show the pile that you picked up (on the side, underneath...), remove it from the play area, so you know what is selected, if we use
    activeCardList in the GameColumn, then the picked up cards (movePile) is removed from that hand, and we can display the movePile somewhere 
    else on the board
5. Tell the user on the screen that the move failed when it is an invalid move
6. Get hidden cards to become visiible when the last one is uncovered and clicked on

Bugs:
I think I solved it, don't update the activeCardList right away when you update movePile. activeCardList will get updated after the move is verified in GameBoard `updateDeck`
When moving `movePile` back and forth: something goes wrong, I think the movePile cards never get put back into their original pile if the move fails

Still not perfect, moving piles around fails sometimes, for some rhyme or reason. The error is the first card in movePile is undefined. The last card of the previous move pile sometimes gets duplicated. If you move the same pile twice in a row, it will duplicate ALL of the cards from the first moved pile if done back to back and with another move in between. Possibly a genius so we'll see. Fixed in helpSetMovePile setActiveCardList(activeCardList.slice(0,i))





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
