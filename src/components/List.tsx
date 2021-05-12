import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function List(props: Props) {
  return <ul>{props.children}</ul>;
}
