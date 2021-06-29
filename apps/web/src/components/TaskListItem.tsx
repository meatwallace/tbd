import React from 'react';
import { Button, Text, ThemeUICSSObject } from 'theme-ui';
import * as Icon from './Icon';
import { ListItem } from './ListItem';
import { Menu } from './Menu/Menu';
import { MenuItems } from './Menu/MenuItems';
import { MenuItem } from './Menu/MenuItem';
import { MenuButton } from './Menu/MenuButton';
import { useTasks } from '../hooks/useTasks';
import { Task } from '../types';
import { isTaskComplete } from '../utils/isTaskComplete';
import { isTaskPending } from '../utils/isTaskPending';
import { isMobile } from '../utils/isMobile';

type Props = {
  children?: React.ReactNode;
  task: Task;
  sx?: ThemeUICSSObject;
};

const styles: { [key: string]: ThemeUICSSObject } = {
  listItem: {
    '&:hover > div, &:hover > div > button': {
      opacity: 1,
    },
  },
  changeStatusButton: {
    color: 'neutral',
    flex: '0 0 auto',
    marginRight: 1,
  },
  title: {
    flex: '1 1 auto',
    marginRight: 1,
    paddingBottom: 2,
    paddingTop: 2,
  },
  contextMenuButton: {
    position: 'absolute',
    right: '-24px',
  },
  contextMenu: {
    right: '24px',
    top: '0',
  },
};

export const TaskListItem = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { completeTask, deleteTask, uncompleteTask } = useTasks();

    return (
      <ListItem {...props} ref={ref} sx={{ ...styles.listItem, ...props.sx }}>
        {props.children}

        {isTaskPending(props.task) && (
          <Button
            variant="icon"
            aria-label="complete"
            onClick={() => completeTask(props.task.id)}
            sx={styles.changeStatusButton}
          >
            <Icon.CircleCheckboxBlank size={24} />
          </Button>
        )}

        {isTaskComplete(props.task) && (
          <Button
            variant="icon"
            aria-label="uncomplete"
            onClick={() => uncompleteTask(props.task.id)}
            sx={styles.changeStatusButton}
          >
            <Icon.CircleCheckboxChecked size={24} />
          </Button>
        )}

        <Text
          sx={{
            ...styles.title,
            opacity: isTaskComplete(props.task) ? 0.5 : 1,
            textDecoration: isTaskComplete(props.task)
              ? 'line-through'
              : 'none',
          }}
        >
          {props.task.title}
        </Text>

        <Menu sx={styles.contextMenuButton}>
          <MenuButton
            aria-label="show task menu"
            sx={{ opacity: isMobile() ? 0.5 : 0 }}
          >
            <Icon.PopoutMenu size={20} />
          </MenuButton>
          <MenuItems sx={styles.contextMenu}>
            <MenuItem onClick={() => deleteTask(props.task.id)}>
              <Icon.DeleteBin size={20} />
              <Text sx={{ marginLeft: 3 }}>Delete task</Text>
            </MenuItem>
          </MenuItems>
        </Menu>
      </ListItem>
    );
  },
);
