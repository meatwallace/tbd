import * as React from 'react';
import { Button } from 'theme-ui';
import { useTasks } from '../hooks/useTasks';
import { exportAsJSON } from '../utils/exportAsJSON';

const styles = {
  container: {
    marginRight: 1,
  },
};

export function ExportButton() {
  const { state } = useTasks();

  return (
    <Button
      onClick={() => exportAsJSON(state, `wemeetagainworld_${Date.now()}.json`)}
      sx={styles.container}
    >
      Export
    </Button>
  );
}
