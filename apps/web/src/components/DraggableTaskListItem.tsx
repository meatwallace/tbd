import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../types';
import { TaskListItem } from './TaskListItem';

type Props = {
  index: number;
  task: Task;
};

export function DraggableTaskListItem(props: Props) {
  // TODO: review performance implication of including the hook in every list item

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <TaskListItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{
            transition: 'background-color 0.5s ease-out',
            backgroundColor: snapshot.isDragging ? 'muted' : 'background',
            borderColor: snapshot.isDragging ? 'muted' : 'border',
            opacity: snapshot.isDragging ? 0.8 : 1,
          }}
          ref={provided.innerRef}
          task={props.task}
        />
      )}
    </Draggable>
  );
}
