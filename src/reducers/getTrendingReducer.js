// swtich statement here takes state, and action 

function reducer (state={
  listings: [{title: 'listing 1', image:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg', description:'you should buy this'}, 'listing 2', 'listing 3', 'listing 4', 'listing 5', 'listing 6', 'listing 7', 'listing 8'],
  trendingItems:[]
  },
   action) {
     
  switch (action.type) {
    case "GET_TRENDING_ITEMS":
    return {
      ...state,
      trendingItems: [action.payload]
    };
    break;
 }
}