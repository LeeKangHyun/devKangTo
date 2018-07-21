import { database } from 'firebase/app';

const getPost = async () => {
  const data = await database()
    .ref('Board')
    .once('value');
  return data.val();
};

const setPost = async data => {
  const newPostKey = await database()
    .ref()
    .child('posts')
    .push().key;
  return await database()
    .ref(`Board/post/${newPostKey}`)
    .update(data);
};

export default {
  getPost,
  setPost,
};
