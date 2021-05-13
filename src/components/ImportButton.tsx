import * as React from 'react';
import useFileInput from 'use-file-input';
import { useTasks } from '../hooks/useTasks';

export function ImportButton() {
  const { importState } = useTasks();

  const handleFileSelect = useFileInput(
    async (files) => {
      const [file] = Array.from(files);

      try {
        const stateString = await file.text();
        const state = JSON.parse(stateString);
        importState(state);
      } catch {
        // TODO: implement error handling
      }
    },
    { accept: 'application/JSON', multiple: false },
  );

  return <button onClick={handleFileSelect}>import</button>;
}
