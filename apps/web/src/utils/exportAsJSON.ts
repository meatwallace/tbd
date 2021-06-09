import { saveAs } from 'file-saver';

export function exportAsJSON(data: {}, fileName: string) {
  var blob = new Blob([JSON.stringify(data)], {
    type: 'text/plain;charset=utf-8',
  });

  saveAs(blob, fileName);
}
