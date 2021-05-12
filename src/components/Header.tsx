import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Header(props: Props) {
  return <header>{props.children}</header>;
}
