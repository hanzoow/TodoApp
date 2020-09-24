import firestore from '@react-native-firebase/firestore';
import {tasksInfo} from '../../redux/type/tasks';
import Utils from '../../common/utils';

export default class FirebaseTasksHelper {
  static createNewTask = async (task: tasksInfo) => {
    const uniqueId = Utils.uniqueIdGen();
    const createResult = await firestore().collection('tasks').add({
      idTask: uniqueId,
      name: task.name,
      icon: task.icon,
      representColor: task.representColor,
    });
    return createResult;
  };
  static updateTask = async (task: tasksInfo) => {
    const updateResult = await firestore()
      .collection('tasks')
      .doc(task.id)
      .update({
        name: task.name,
        icon: task.icon,
        representColor: task.representColor,
      });
    return updateResult;
  };

  static getAllTasks = async () => {
    const snapshot = await firestore().collection('tasks').get();
    return snapshot.docs.map((doc) => doc.data());
  };
}
