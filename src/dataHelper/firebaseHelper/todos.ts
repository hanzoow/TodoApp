import firestore from '@react-native-firebase/firestore';
export default class FirebaseTodoHelper {
  static countTodo = async (userId: string) => {
    const snapshot = await firestore()
      .collection('users')
      .doc(userId)
      .collection('todos')
      .get();
    return snapshot.size;
  };
  static getAllTodos = async (userId: string) => {
    const snapshot = await firestore()
      .collection('users')
      .doc(userId)
      .collection('todos')
      .get();
    console.log('!!!!', snapshot);
    return snapshot.docs.map((doc) => doc.data());
  };
}
