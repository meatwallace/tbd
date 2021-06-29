import React from 'react';
import { MenuContext } from './MenuContext';

type Props = {
  children: React.ReactNode;
};

export function MenuProvider(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const value = { isOpen, toggle };

  return <MenuContext.Provider value={value} {...props} />;
}
