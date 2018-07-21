import firebase from 'firebase/app';
import 'firebase/database';

const getPost = async () => {
  const data = await firebase
    .database()
    .ref('Board')
    .once('value');
  return data.val();
};

const setPost = async data => {
  const database = firebase.database();
  const newPostKey = await database
    .ref()
    .child('posts')
    .push().key;
  return await database.ref(`Board/post/${newPostKey}`).update(data);
};

export default {
  getPost,
  setPost,
};
