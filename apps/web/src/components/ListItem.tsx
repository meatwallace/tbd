import React from 'react';
import { Flex, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {
  alignItems: 'center',
  backgroundColor: 'background',
  borderBottom: '1px solid',
  borderBottomColor: 'border',
  overflow: 'visible',
  paddingBottom: 1,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
  position: 'relative',
};

export const ListItem = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => (
    <Flex {...props} as="li" ref={ref} sx={{ ...styles, ...props.sx }}>
      {props.children}
    </Flex>
  ),
);
