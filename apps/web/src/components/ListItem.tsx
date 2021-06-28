import React from 'react';
import { Flex, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {
  backgroundColor: 'background',
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: 'border',
  paddingBottom: 1,
  paddingTop: 1,
};

export const ListItem = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => (
    <Flex {...props} as="li" ref={ref} sx={{ ...styles, ...props.sx }}>
      {props.children}
    </Flex>
  ),
);
