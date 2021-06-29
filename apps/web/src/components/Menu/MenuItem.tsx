import React from 'react';
import { Flex, ThemeUICSSObject } from 'theme-ui';
import { useMenu } from './useMenu';

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const styles: ThemeUICSSObject = {
  alignItems: 'center',
  backgroundColor: 'elevated',
  paddingBottom: 2,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 2,
  transition: 'background 200ms ease-in-out',
  '&:hover': {
    backgroundColor: 'muted',
  },
};

export function MenuItem(props: Props) {
  const { toggle } = useMenu();

  return (
    <Flex
      {...props}
      as="li"
      role="button"
      sx={styles}
      onClick={(e) => {
        toggle();
        props.onClick(e);
      }}
    >
      {props.children}
    </Flex>
  );
}
