import { Flex } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles = {
  container: {
    justifyContent: 'center',
    paddingBottom: 3,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,
  },
};

export function Footer(props: Props) {
  return (
    <Flex as="footer" sx={styles.container}>
      {props.children}
    </Flex>
  );
}
