import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function ListItem(props: Props) {
  return <li>{props.children}</li>;
}
