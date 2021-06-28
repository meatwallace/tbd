import { Flex, ThemeUICSSObject } from 'theme-ui';
import * as Icon from './Icon';
import { isMobile } from '../utils/isMobile';

type Props = {
  sx?: ThemeUICSSObject;
};

const styles: ThemeUICSSObject = {
  alignItems: 'center',
  backgroundColor: isMobile() ? 'transparent' : 'elevated',
  borderRadius: 'default',
  color: 'neutral',
  height: '28px',
};

export function DragHandle(props: Props) {
  return (
    <Flex {...props} sx={{ ...styles, ...props.sx }}>
      <Icon.DragHandle size={24} />
    </Flex>
  );
}
