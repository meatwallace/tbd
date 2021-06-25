import { RiCheckboxCircleLine } from 'react-icons/ri';

type Props = {
  size: number;
};

export function CircleCheckboxChecked(props: Props) {
  return <RiCheckboxCircleLine {...props} />;
}
