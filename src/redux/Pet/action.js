import FB from 'firebase';

export const GET_POST_PET = `GET_POST_PET`;
export const FETCH_POST_PET = `FETCH_POST_PET`;
export const PUT_POST_PET = `PUT_POST_PET`;

export const getPostPet = () => {
  const ref = FB.database().ref(`Board/post`);
  ref.once('value').then(snapshot => {
    return {
      type: GET_POST_PET,
      list: snapshot.val()
    }
  })
};

export const fetchPostPet = list => {
  return {
    type: FETCH_POST_PET,
    list
  }
};

export const putPostPet = () => {
  
  return {
    type: PUT_POST_PET
  }
};