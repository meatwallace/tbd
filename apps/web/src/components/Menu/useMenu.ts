import React from 'react';
import invariant from 'tiny-invariant';
import { MenuContext } from './MenuContext';

export function useMenu() {
  const context = React.useContext(MenuContext);

  invariant(context, 'useMenu must be used within a MenuProvider');

  const { isOpen, toggle } = context;

  return { isOpen, toggle };
}
