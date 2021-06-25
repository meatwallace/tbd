import { Flex, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles: ThemeUICSSObject = {
  alignItems: 'center',
  borderBottom: '1px solid',
  borderBottomColor: 'border',
  paddingBottom: 1,
  paddingTop: 1,
};

export function ListItem(props: Props) {
  return (
    <Flex as="li" sx={styles}>
      {props.children}
    </Flex>
  );
}
