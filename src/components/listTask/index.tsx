import React from 'react';
import {FlatListProperties, FlatList} from 'react-native';

export interface ListTasksProps extends FlatListProperties<FlatList> {
  key: string;
}

const ListTasks = (props: ListTasksProps) => {
  return (
    <FlatList
      data={props.data}
      renderItem={props.renderItem}
      contentContainerStyle={props.contentContainerStyle}
      horizontal={props.horizontal}
      keyExtractor={props.keyExtractor}
      numColumns={props.numColumns}
      key={props.key}
      showsVerticalScrollIndicator={props.showsVerticalScrollIndicator}
    />
  );
};

export default ListTasks;
