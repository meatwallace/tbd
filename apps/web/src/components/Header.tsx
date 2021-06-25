import { Flex, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles: ThemeUICSSObject = {
  alignItems: 'center',
  backgroundColor: 'header',
  flex: '1 0 auto',
  height: '50px',
  paddingLeft: 2,
  paddingRight: 2,
};

export function Header(props: Props) {
  return (
    <Flex as="header" sx={styles}>
      {props.children}
    </Flex>
  );
}
