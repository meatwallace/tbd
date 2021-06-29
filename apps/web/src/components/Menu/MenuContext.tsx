import React from 'react';

export const MenuContext =
  React.createContext<
    | {
        isOpen: boolean;
        toggle: () => void;
      }
    | undefined
  >(undefined);
