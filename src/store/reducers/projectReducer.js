const initState = {
  projects: [
    {id: '1', restaurant: 'The Cheesecake Factory', time: 'Mon-Thu 11 am - 11 pm / Fri-Sat 11 am - 12:30 am / Sun 10 am - 11 pm'},
    {id: '2', restaurant: 'Kushi Tsuru', time: 'Mon-Sun 11:30 am - 9 pm'},
    {id: '3', restaurant: 'Osakaya Restaurant', time: 'Mon-Thu, Sun 11:30 am - 9 pm / Fri-Sat 11:30 am - 9:30 pm'}
  ]
}
//for testing data input

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_COLECTION_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_COLECTION_ERROR':
      console.log('create project error');
      return state;
      case 'UPDATE_COLLECTION_SUCCESS':
      console.log('update collection success');
      return state;
      case 'UPDATE_COLLECTION_ERROR':
      console.log('update collection error');
      return state;
      case 'ADD_FAVORITE_SUCCESS':
      console.log('update favorite success');
      return state;
      case 'ADD_FAVORITE_ERROR':
      console.log('update favorite error');
      return state;
      case 'UPDATE_RESTAURANT_SUCCESS':
      console.log('update restaurant success');
      return state;
      case 'UPDATE_RESTAURANT_ERROR':
      console.log('update restaurant error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;