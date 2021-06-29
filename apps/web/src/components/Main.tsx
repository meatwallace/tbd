import { Container, ThemeUICSSObject } from 'theme-ui';

type Props = {
  children: React.ReactNode;
};

const styles: ThemeUICSSObject = {
  display: 'flex',
  flex: '1 1 100%',
  flexFlow: 'column',
  paddingBottom: 3,
  paddingTop: 3,
};

export function Main(props: Props) {
  return (
    <Container as="main" variant="container" sx={styles}>
      {props.children}
    </Container>
  );
}
