import { MdDragHandle } from 'react-icons/md';

type Props = {
  size: number;
};

export function DragHandle(props: Props) {
  return <MdDragHandle {...props} />;
}
