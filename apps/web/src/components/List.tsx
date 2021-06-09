import * as React from 'react';
import { Box } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: {},
};

export function List(props: Props) {
  return (
    <Box as="ul" sx={styles.container}>
      {props.children}
    </Box>
  );
}
