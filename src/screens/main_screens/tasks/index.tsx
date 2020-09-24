import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import HeaderBar from '../../../components/headerBar';
import ListTasks from '../../../components/listTask';
import {getAllTasks} from '../../../redux/actions/tasks';
import {useSelector} from '../../../redux/reducers';
import Utils from '../../../common/utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TasksScreen = () => {
  const tasks = useSelector((state) => state).tasks.tasks;
  console.log(tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const _getBackgroundColorByIcon = (name: string) => {
    switch (name) {
      case 'Personal':
        return '#FFEE9B';
      case 'Work':
        return '#B5FF9B';
      case 'Party':
        return '#9BFFF8';
      case 'Study':
        return '#F59BFF';
      case 'Shopping':
        return '#FFD09B';
      default:
        return '#FF9BCD';
    }
  };

  const _renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity style={{margin: 10}}>
        <View
          key={index}
          style={{
            flex: 1.5,
            backgroundColor: 'white',
            width: Utils.screenWidth() / 2.2,
            justifyContent: 'center',
            alignItems: 'center',
            height: 180,
            borderRadius: 6,
            shadowOffset: {width: 1, height: 1},
            shadowColor: '#707070',
            shadowOpacity: 0.8,
            elevation: 1,
            shadowRadius: 2,
          }}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: _getBackgroundColorByIcon(item.name),
                height: 60,
                width: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.icon}}
                resizeMode={'contain'}
                style={{height: 30, width: 30}}
              />
            </View>
            <Text style={{fontSize: 20, paddingVertical: 8}}>{item.name}</Text>
            <Text style={{fontSize: 10}}>{item.sumOfTodos} Tasks</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderBar />
      <View style={{flex: 1}}>
        <ListTasks
          key={'flatlist'}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data={tasks}
          renderItem={_renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default TasksScreen;
