import firebase from 'firebase';

const getPost = async () => {
  const fb = firebase.database();
  const data = await fb.ref('Board').once('value');
  return data.val();
};

export default {
  getPost,
}