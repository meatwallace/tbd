import { Box, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles: ThemeUICSSObject = {
  flex: '1 1 100%',
  paddingBottom: 3,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 3,
};

export function Main(props: Props) {
  return (
    <Box as="main" sx={styles}>
      {props.children}
    </Box>
  );
}
