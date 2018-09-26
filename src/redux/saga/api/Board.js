import FB from 'firebase/app';
import 'firebase/database';

const getPost = async () => {
  const data = await FB
    .database()
    .ref('Board')
    .once('value');
  return data.val();
};

const setPost = async data => {
  const database = FB.database();
  const newPostKey = await database
    .ref()
    .child('posts')
    .push()
    .key;
  return await database.ref(`Board/post/${newPostKey}`).update(data);
};

export default {
  getPost,
  setPost,
};
