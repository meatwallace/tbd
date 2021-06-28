import React from 'react';
import { Box, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {};

export const List = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Box {...props} ref={ref} as="ul" sx={{ ...styles, ...props.sx }}>
    {props.children}
  </Box>
));
