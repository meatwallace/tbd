import * as React from 'react';

type Props = {
  // TODO: fix
  children: any;
};

export function List(props: Props) {
  return <ul>{props.children}</ul>;
}
