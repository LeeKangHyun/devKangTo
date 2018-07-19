import { database } from 'firebase/app';

const getPost = async () => {
  const data = await database()
    .ref('Board')
    .once('value');
  return data.val();
};

export default {
  getPost,
};
