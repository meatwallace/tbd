import { Heading, ThemeUICSSObject } from 'theme-ui';

const styles: ThemeUICSSObject = {
  color: 'white',
  flex: '1 0 auto',
  fontSize: 4,
  textAlign: 'center',
};

export function BrandLogo() {
  return (
    <Heading as="h1" variant="title" sx={styles}>
      tbd
    </Heading>
  );
}
