// object dispatches type and payload
export function fetchTrending() {
  return { 
    type: "GET_TRENDING_ITEMS",
    payload: ['ps4', 'xbox1', 'nintendo switch']
  }
}