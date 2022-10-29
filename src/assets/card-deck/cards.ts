import d2 from "./2_of_diamonds.png"
import d3 from "./3_of_diamonds.png"
import d4 from "./4_of_diamonds.png"
import d5 from "./5_of_diamonds.png"
import d6 from "./6_of_diamonds.png"
import d7 from "./7_of_diamonds.png"
import d8 from "./8_of_diamonds.png"
import d9 from "./9_of_diamonds.png"
import d10 from "./10_of_diamonds.png"
import dj from "./jack_of_diamonds2.png"
import dq from "./queen_of_diamonds2.png"
import dk from "./king_of_diamonds2.png"
import da from "./ace_of_diamonds.png"

import c2 from "./2_of_clubs.png"
import c3 from "./3_of_clubs.png"
import c4 from "./4_of_clubs.png"
import c5 from "./5_of_clubs.png"
import c6 from "./6_of_clubs.png"
import c7 from "./7_of_clubs.png"
import c8 from "./8_of_clubs.png"
import c9 from "./9_of_clubs.png"
import c10 from "./10_of_clubs.png"
import cj from "./jack_of_clubs2.png"
import cq from "./queen_of_clubs2.png"
import ck from "./king_of_clubs2.png"
import ca from "./ace_of_clubs.png"

import s2 from "./2_of_spades.png"
import s3 from "./3_of_spades.png"
import s4 from "./4_of_spades.png"
import s5 from "./5_of_spades.png"
import s6 from "./6_of_spades.png"
import s7 from "./7_of_spades.png"
import s8 from "./8_of_spades.png"
import s9 from "./9_of_spades.png"
import s10 from "./10_of_spades.png"
import sj from "./jack_of_spades2.png"
import sq from "./queen_of_spades2.png"
import sk from "./king_of_spades2.png"
import sa from "./ace_of_spades.png"

import h2 from "./2_of_hearts.png"
import h3 from "./3_of_hearts.png"
import h4 from "./4_of_hearts.png"
import h5 from "./5_of_hearts.png"
import h6 from "./6_of_hearts.png"
import h7 from "./7_of_hearts.png"
import h8 from "./8_of_hearts.png"
import h9 from "./9_of_hearts.png"
import h10 from "./10_of_hearts.png"
import hj from "./jack_of_hearts2.png"
import hq from "./queen_of_hearts2.png"
import hk from "./king_of_hearts2.png"
import ha from "./ace_of_hearts.png"

const cards = [ 
    d2, d3, d4, d5, d6, d7, d8, d9, d10, dj, dq, dk, da,
    c2, c3, c4, c5, c6, c7, c8, c9, c10, cj, cq, ck, ca,
    s2, s3, s4, s5, s6, s7, s8, s9, s10, sj, sq, sk, sa,
    h2, h3, h4, h5, h6, h7, h8, h9, h10, hj, hq, hk, ha
]

let suits:string[] = ['diamonds', 'clubs', 'spades', 'hearts']
let values:string[] = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace']
//const deck:Record<string, string[]> = {'diamonds':[],'clubs': [], 'spades':[], 'hearts':[]};

const deck:Record<string, Record<string,string>> = {}
for(let i = 0; i < 4; i++){
    deck[suits[i]]= {};
    for(let j = 0; j < 13; j++){
        deck[suits[i]][values[j]] = cards[i*13+j];
    }
}

export default deck;

