import React from 'react';
import { Button, ThemeUICSSObject } from 'theme-ui';
import { useMenu } from './useMenu';

type Props = {
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {
  padding: 0,
};

export function MenuButton(props: Props) {
  const { toggle } = useMenu();

  return (
    <Button
      {...props}
      variant="icon"
      sx={{ ...styles, ...props.sx }}
      onClick={toggle}
    >
      {props.children}
    </Button>
  );
}
