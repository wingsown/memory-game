const initialState = [
    {id: 0, contents: 'Provider', visibile: true, matched: true},
    {id: 1, contents: 'Provider', visibile: true, matched: true},
    {id: 2, contents: 'selector', visibile: true, matched: true},
    {id: 3, contents: 'selector', visibile: true, matched: true},
    {id: 4, contents: 'useSelector()', visibile: true, matched: true},
    {id: 5, contents: 'useSelector()', visibile: true, matched: true},
    {id: 6, contents: 'useDispatch()', visibile: true, matched: true},
    {id: 7, contents: 'useDispatch()', visibile: true, matched: true},
    {id: 8, contents: 'Pure Function', visibile: true, matched: true},
    {id: 9, contents: 'Pure Function', visibile: true, matched: true},
    {id: 10, contents: 'react-redux', visibile: true, matched: true},
    {id: 11, contents: 'react-redux', visibile: true, matched: true},
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
    }
}