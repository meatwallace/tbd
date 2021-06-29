import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Text, ThemeUICSSObject } from 'theme-ui';
import { CreateTaskInput } from './CreateTaskInput';
import { DraggableTaskListItem } from './DraggableTaskListItem';
import * as Icon from './Icon';
import { List } from './List';
import { Menu } from './Menu/Menu';
import { MenuItems } from './Menu/MenuItems';
import { MenuItem } from './Menu/MenuItem';
import { MenuButton } from './Menu/MenuButton';
import { TaskListItem } from './TaskListItem';
import { useTasks } from '../hooks/useTasks';
import { useTasksFilter } from '../hooks/useTasksFilter';
import { DroppableID, StatusFilter, Task } from '../types';

type Props = {};

const styles: { [key: string]: ThemeUICSSObject } = {
  contextMenu: {
    alignSelf: 'flex-end',
  },
  contextMenuButton: {
    right: '0',
    top: '24px',
  },
};

export function TaskList(props: Props) {
  const { completedTasks, pendingTasks, reorderTask } = useTasks();
  const { filter, setStatusFilter } = useTasksFilter();

  const handleDragEnd = createDragEndHandler(reorderTask);

  const isCompletedTasksVisible = filter.status === StatusFilter.All;

  const toggleCompletedTasks = () => {
    if (isCompletedTasksVisible) {
      setStatusFilter(StatusFilter.Pending);
    } else {
      setStatusFilter(StatusFilter.All);
    }
  };

  const toggleCompletedTasksText = isCompletedTasksVisible
    ? 'Hide completed tasks'
    : 'Show completed tasks';

  const ToggleCompletedTasksIcon = isCompletedTasksVisible
    ? Icon.CircleCheckboxChecked
    : Icon.CircleCheckboxCrossed;

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Menu sx={styles.contextMenu}>
        <MenuButton aria-label="show task list menu">
          <Icon.PopoutMenu size={24} />
        </MenuButton>
        <MenuItems sx={styles.contextMenuButton}>
          <MenuItem onClick={() => toggleCompletedTasks()}>
            <ToggleCompletedTasksIcon size={20} />
            <Text sx={{ marginLeft: 2 }}>{toggleCompletedTasksText}</Text>
          </MenuItem>
        </MenuItems>
      </Menu>

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
