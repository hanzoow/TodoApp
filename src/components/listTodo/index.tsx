import React from 'react';
import {FlatListProperties, FlatList} from 'react-native';
export interface ListTodosProps extends FlatListProperties<FlatList> {}

const ListTodo = (props: ListTodosProps) => {
  return (
    <FlatList
      data={props.data}
      renderItem={props.renderItem}
      horizontal={props.horizontal}
      keyExtractor={props.keyExtractor}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
    />
  );
};
export default ListTodo;
