import * as React from 'react';
import { Flex } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'muted',
    paddingBottom: 1,
    paddingTop: 1,
  },
};

export function ListItem(props: Props) {
  return (
    <Flex as="li" sx={styles.container}>
      {props.children}
    </Flex>
  );
}
