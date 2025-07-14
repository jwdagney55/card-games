There are two actions that must occur for a move. The first click on a card will update the movePile and takePile states. This is the list of cards that one wants to move from the current playable deck. The second click will update the putPile state based on the column selected, and attempt to place the current movePile onto the end of the putPile. 


movePile

A list of `cards` that will be moved, when click on a card, the card, and all cards below it will be included in this list. Updates on first click on a card


takePile

The index of the column from which the movePile originates, updates on first click on a card.


putPile

The index of the column to attempt to place the existing movePile. 


activeCardList

This is the list of cards in this column. Updated on the first click on a column. Remove the cards (inclusive) beneath the selected card from the activeCardsList. The removed cards will be placed into the movePile with setMovePile


Card components have a built-in function `hanldeClick` that first checks whether ```takePile``` has been updated (not updated if first action, existing value if second action). If `takePile` has not been updated, we `setMovePile` list and `setTakePile` number. If `takePile` has been updated, we check to see if `putPile` has been updated. If it has not, we `setPutPile` according the the column that the card belongs to. 

Error could be here, if both of these are not -1, and we click on a card, what happens? Well I guess nothing, but should we reset both back to -1 regardless? Maybe





movePile, takePile, putPile

takePile: -1
putPile: -1
movePile: []

1) Click on column 4 card 3 (2 cards beneath it, 2 cards above it)
    a) Card->handleClick->setMovePile->setTakePile


takePile: 4
putPile: -1
movePile: [card1, card2, card3]
Col4: setActiveCardList: [card, card0]


2) Next click on column 2 (anywhere?) pile of 4 cards
    a) Card->handleClick->setPutPile
    b) Up to GameBoard->setPutPile->updateDeck with this row (row and column are interchangable)
    c)updateDeck -> go to takePile and replace the playDeck -> place each card in movePile into the end of the put pile in playDeck -> setPlayDeck -> setPutPile(-1) -> setTakePile(-1) -> we dont setMovePile([]) but we probably should


takePile: -1
putPile: -1
movePile: [card1, card2, card3]
Col4: setActiveCardList: [card, card0]
playDeck get's updated


The visible deck on the screen doesn't always match the activeCardList i am guessing. playDeck and activeCardList in GameColumn are in disagreement. Also could be a movePile issue.