declare module 'react-beautiful-dnd-test-utils' {
  export function mockGetComputedSpacing(): void;

  export function mockDndElSpacing(reactTestLibraryUtils: any): void;

  type DndConfig = {
    getByText: any;
    getDragEl: any;
    direction: any;
    positions: any;
  };

  export function makeDnd(config: DndConfig): Promise<void>;

  export const DND_DRAGGABLE_DATA_ATTR = string;
  export const DND_DIRECTION_DOWN = string;
  export const DND_DIRECTION_UP = string;
}
