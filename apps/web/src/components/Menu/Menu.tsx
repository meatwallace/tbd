import React from 'react';
import { Box, ThemeUICSSObject } from 'theme-ui';
import { MenuContext } from './MenuContext';

type Props = {
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {
  position: 'relative',
};

export function Menu(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      <Box sx={{ ...styles, ...props.sx }}>{props.children}</Box>
    </MenuContext.Provider>
  );
}
