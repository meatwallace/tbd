import * as React from 'react';
import { useTasks } from '../state/useTasks';
import { exportAsJSON } from '../utils/exportAsJSON';

export function ExportButton() {
  const { state } = useTasks();

  return (
    <button
      onClick={() =>
        exportAsJSON(state, `wemeetagainworld_data_${Date.now()}.json`)
      }
    >
      export
    </button>
  );
}
