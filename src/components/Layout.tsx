import * as React from 'react';
import { Flex } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

export function Layout(props: Props) {
  return (
    <Flex sx={{ flexFlow: 'column', height: '100%' }}>{props.children}</Flex>
  );
}
