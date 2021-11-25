const initialState = [
    {id: 0, contents: 'Basketball', visible: true, matched: true},
    {id: 1, contents: 'Basketball', visible: true, matched: true},
    {id: 2, contents: 'One Piece', visible: true, matched: true},
    {id: 3, contents: 'One Piece', visible: true, matched: true},
    {id: 4, contents: 'Eminem', visible: true, matched: true},
    {id: 5, contents: 'Eminem', visible: true, matched: true},
    {id: 6, contents: 'JavaScript', visible: true, matched: true},
    {id: 7, contents: 'JavaScript', visibile: true, matched: true},
    {id: 8, contents: 'Eloquent JavaScript', visible: true, matched: true},
    {id: 9, contents: 'Eloquent JavaScript', visible: true, matched: true},
    {id: 10, contents: 'Rich Dad Poor Dad', visible: true, matched: true},
    {id: 11, contents: 'Rich Dad Poor Dad', visible: true, matched: true},
];

export const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'board/setBoard':
            let setState = [];
            action.payload.forEach((element, index) => 
            setState.push({
                id: index,
                contents: element,
                visible: false,
                matched: false
            }));
            
            return setState;

        case 'board/flipCard':
            let flipState = [...state];
            const cardID = action.payload;
            
            flipState[cardID] = {...state[cardID], visible: true}

            const [index1, index2] = flipState.filter(card => card.visible).map(card => card.id);

            if (index2 !== undefined) {
                const card1 = flipState[index1];
                const card2 = flipState[index2];

                if (card1.contents === card2.contents) {
                    flipState[index1] = {...card1, visible: false, matched: true}
                    flipState[index2] = {...card2, visible: false, matched: true}
                }
            }

            return flipState;
        case 'board/resetCards':
            return state.map(card => ({
                ...card,
                visible: false
            }));
        default:
            return state;        
    }
}


const wordPairs = [
    'Basketball', 'Basketball',
    'One Piece', 'One Piece',
    'Eminem', 'Eminem',
    'JavaScript', 'JavaScript',
    'Eloquent JavaScript', 'Eloquent JavaScript',
    'Rich Dad Poor Dad', 'Rich Dad Poor Dad',

]

const randomWords = () => {
    let words = []
    let newWordPairs = [...wordPairs]
    const reps = newWordPairs.length

    for (let i=0; i<reps; i++) {
        const wordIndex = Math.floor(Math.random() * newWordPairs.length);
        words.push(newWordPairs[wordIndex])
        newWordPairs.splice(wordIndex, 1)
    }

    return words;
}

// Action Creators
export const setBoard = () => {
    const words = randomWords()
    return {
        type: 'board/setBoard',
        payload: words
    }
}

export const flipCard = (id) => {
    return {
        type: 'board/flipCard',
        payload: id
    }
}

export const resetCards = (indices) => {
    return {
        type: 'board/resetCards'
    }
}

export const selectBoard = state => { return state.board.map(card => ({id:card.id, contents: card.contents}))};

export const selectVisibleIds = state => {return state.board.filter(card => card.visible).map(card => card.id)};
export const selectMatchedIds = state => state.board.filter(card => card.matched).map(card => card.id);