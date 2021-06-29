import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { ThemeUICSSObject } from 'theme-ui';
import { Task } from '../types';
import { isMobile } from '../utils/isMobile';
import { DragHandle } from './DragHandle';
import { TaskListItem } from './TaskListItem';

type Props = {
  index: number;
  task: Task;
};

const styles: { [key: string]: ThemeUICSSObject } = {
  dragHandle: {
    left: '-24px',
    opacity: isMobile() ? 0.5 : 0,
    position: 'absolute',
    transition: 'opacity 150ms ease-in-out',
  },
};

export function DraggableTaskListItem(props: Props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <React.Fragment>
          <TaskListItem
            {...provided.draggableProps}
            ref={provided.innerRef}
            sx={{
              transition: 'background-color 0.5s ease-out',
              backgroundColor: snapshot.isDragging ? 'muted' : 'background',
              borderColor: snapshot.isDragging ? 'muted' : 'border',
              opacity: snapshot.isDragging ? 0.8 : 1,
            }}
            task={props.task}
          >
            <DragHandle {...provided.dragHandleProps} sx={styles.dragHandle} />
          </TaskListItem>
        </React.Fragment>
      )}
    </Draggable>
  );
}
