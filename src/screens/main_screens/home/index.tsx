import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import HeaderBar from '../../../components/headerBar';
import NoTodo from '../../../components/noTodo';
import {useSelector} from '../../../redux/reducers';
import ListTodo from '../../../components/listTodo';
import {useDispatch} from 'react-redux';
import {getAllTodos} from '../../../redux/actions/todos';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state).user.userInfo;
  const todos = useSelector((state) => state).todos;
  useEffect(() => {
    dispatch(getAllTodos(user.uid));
  }, []);
  const _renderItem = () => {
    return null;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderBar visibleNoti={todos.todos.length > 0 ? true : false} />
      {todos.todos.length !== 0 ? (
        <NoTodo />
      ) : (
        <ListTodo
          data={todos}
          key={'todoList'}
          renderItem={_renderItem}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
