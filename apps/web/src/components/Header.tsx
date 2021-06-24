import { Box } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: {
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 3,
  },
};

export function Header(props: Props) {
  return (
    <Box as="header" sx={styles.container}>
      {props.children}
    </Box>
  );
}
