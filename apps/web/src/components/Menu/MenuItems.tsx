import React from 'react';
import { Box, ThemeUICSSObject } from 'theme-ui';
import { useMenu } from './useMenu';
import { useOnOutsideClick } from './useOnOutsideClick';

type Props = {
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {
  backgroundColor: 'elevated',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'default',
  boxShadow: 'popover',
  minWidth: '250px',
  paddingBottom: 2,
  paddingTop: 2,
  position: 'absolute',
  zIndex: 1,
};

export function MenuItems(props: Props) {
  const menuRef = React.useRef<HTMLDivElement>(null);
  const { isOpen, toggle } = useMenu();

  useOnOutsideClick(menuRef, isOpen, toggle);

  return (
    <Box
      {...props}
      as="ul"
      ref={menuRef}
      sx={{
        ...styles,
        ...props.sx,
        display: isOpen ? 'block' : 'none',
      }}
    >
      {props.children}
    </Box>
  );
}
