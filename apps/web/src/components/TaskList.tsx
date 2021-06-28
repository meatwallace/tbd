import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { CreateTaskInput } from './CreateTaskInput';
import { List } from './List';
import { TaskListItem } from './TaskListItem';
import { DraggableTaskListItem } from './DraggableTaskListItem';
import { ToggleCompletedTasksFilterButton } from './ToggleCompletedTasksFilterButton';
import { useTasks } from '../hooks/useTasks';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { DroppableID, StatusFilter, Task } from '../types';

type Props = {};

export function TaskList(props: Props) {
  const { completedTasks, pendingTasks, reorderTask } = useTasks();
  const { filter } = useTasksFilter();

  const handleDragEnd = createDragEndHandler(reorderTask);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ToggleCompletedTasksFilterButton />
      <CreateTaskInput />
      <Droppable droppableId={DroppableID.TaskList}>
        {(provided, snapshot) => (
          <List
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{
              transition: 'background-color 0.5s ease-out',
              backgroundColor: snapshot.isDraggingOver
                ? 'highlight'
                : 'background',
            }}
          >
            {pendingTasks.map((task: Task, index: number) => (
              <DraggableTaskListItem key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>

      {filter.status === StatusFilter.All && (
        <List>
          {completedTasks.map((task: Task) => (
            <TaskListItem key={task.id} task={task} />
          ))}
        </List>
      )}
    </DragDropContext>
  );
}

type ReorderFn = (
  id: string,
  sourceIndex: number,
  destinationIndex: number,
) => void;

function createDragEndHandler(reorderFn: ReorderFn) {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const isSameID =
      result.destination.droppableId === result.source.droppableId;
    const isSameIndex = result.destination.index === result.source.index;

    if (isSameID && isSameIndex) {
      return;
    }

    reorderFn(
      result.draggableId,
      result.source.index,
      result.destination.index,
    );
  };

  return handleDragEnd;
}
