import { Box } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: {
    flex: '1 1 100%',
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
};

export function Main(props: Props) {
  return (
    <Box as="main" sx={styles.container}>
      {props.children}
    </Box>
  );
}
