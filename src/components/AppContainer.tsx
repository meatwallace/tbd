import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function AppContainer(props: Props) {
  return props.children;
}
