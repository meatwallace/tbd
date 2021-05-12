import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export function Footer(props: Props) {
  return <footer>{props.children}</footer>;
}
