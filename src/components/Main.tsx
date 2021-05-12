import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Main(props: Props) {
  return props.children;
}
