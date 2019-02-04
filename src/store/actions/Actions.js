export const createCollection = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('collections').add({
      ...project,
    }).then(() => {
      dispatch({ type: 'CREATE_COLECTION_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_COLECTION_ERROR' }, err);
    });
  }
};

export const updateCollection = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const collectId = project.collectId;
    const firestore = getFirestore();
    firestore.collection('collections').doc(collectId).update({
      ...project,
    }).then(() => {
      dispatch({ type: 'UPDATE_COLLECTION_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPDATE_COLLECTION_ERROR' }, err);
    });
  }
};

export const addFav = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const collectId = project.collectId;
    const restaurantid = project.restaurantid;
    const pick = project.pick;
    const firestore = getFirestore();
    firestore.collection('collections').doc(collectId).collection('favorite').add({
      ...project,
    }).then(() => {
      dispatch({ type: 'ADD_FAVORITE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ADD_FAVORITE_ERROR' }, err);
    });
    firestore.collection('restaurants').doc(restaurantid).update({
      pick: pick
    }).then(() => {
      dispatch({ type: 'UPDATE_RESTAURANT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPDATE_RESTAURANT_ERROR' }, err);
    });
  }
};

export const removeFav = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const restaurantid = project.restaurantid;
    const collectId = project.collectId;
    const updateId = project.updateId;
    const pick = project.pick
    const firestore = getFirestore();
    firestore.collection('collections').doc(collectId).collection('favorite').doc(restaurantid).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    firestore.collection('restaurants').doc(updateId).update({
      pick: pick
    }).then(() => {
      dispatch({ type: 'UPDATE_RESTAURANT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'UPDATE_RESTAURANT_ERROR' }, err);
    });
  }
};