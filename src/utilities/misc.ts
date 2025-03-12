import {card} from '../interfaces/card'
import deck from '../assets/card-deck/cards'

export const value_dict: {[key:string]:number} = { 'ace':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10,
                          'jack':11, 'queen':12, 'king':13}

export function make_deck() : card[] {
  let newDeck:card[] = [];
  let suits:string[] = Object.keys(deck)
  let values:string[] = Object.keys(deck[suits[0]])

  suits.forEach(
    (suit) => {
      values.forEach(
        (value) => {
          newDeck.push({value:value,suit:suit,show:true})
        }
      )
    }
  )
  return newDeck
}

export function shuffle_deck(deck:card[]) : card[] {
  let shuffled:card[] = deck
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return shuffled
}

/*
Will shuffle the provided deck of cards and return 
the deck in 7 columns
Column 00, 01, 02, 03, 04, 05, 06
Cards  01, 06, 07, 08, 09, 10, 11
Maybe future have sub deals that select for solitaire, alaska etc
*/
export function deal_deck(deck:card[]) : card[][] {
  let dealt:card[][] = [[]]
  let shuffled:card[] = shuffle_deck(deck)

  dealt[0].push(shuffled[0])
  let pos:number = 1
  for(let i = 1; i < 7; i++){
    dealt.push([])
    for(let j = 0; j < 5+i; j++){
      if(j < i){
        shuffled[pos].show = false
      }
      else{
        shuffled[pos].show = true
      }
      dealt[i].push(shuffled[pos])
      pos++;
    }
  }

  return dealt
}