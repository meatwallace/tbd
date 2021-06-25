import React from 'react';
import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
} from 'theme-ui';
import invariant from 'tiny-invariant';
import { theme } from '@tbd/theme';
import { TypeScale, ColorPalette } from '@theme-ui/style-guide';

export function StyleGuide() {
  invariant(
    theme.layout && theme.text && theme.buttons && theme.cards && theme.badges,
  );

  return (
    <React.Fragment>
      <Box as="header" sx={{ backgroundColor: 'header', color: 'white' }}>
        <Container
          sx={{ paddingBottom: [3, 4], paddingTop: 5, textAlign: 'center' }}
        >
          <Heading as="h1" variant="title" color="white">
            tbd theme
          </Heading>
          <Text as="p" variant="subtitle" mt={3}>
            tbd's theme & react components for components for{' '}
            <Link href="https://theme-ui.com">Theme UI</Link>.
          </Text>
        </Container>
      </Box>
      <Box as="section" sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Container>
          <Heading variant="headline">Containers</Heading>
        </Container>
        {Object.keys(theme.layout).map((key) => (
          <Container
            key={key}
            variant={key}
            sx={{
              border: '2px dashed',
              borderColor: 'border',
              borderRadius: 'default',
              marginTop: 3,
              marginBottom: 3,
              paddingBottom: 3,
              paddingTop: 3,
            }}
          >
            {key}
          </Container>
        ))}
      </Box>
      <Box
        as="main"
        sx={{
          backgroundColor: 'background',
          color: 'text',
          paddingBottom: 4,
          paddingTop: 4,
          h2: { marginTop: 4 },
        }}
      >
        <Container>
          <Heading variant="headline">Text</Heading>
          <Card>
            {Object.keys(theme.text).map((key) => {
              const Component = key.includes('head') ? Heading : Text;

              return (
                <Component
                  key={key}
                  variant={key}
                  sx={{ marginBottom: 3, marginTop: 0 }}
                >
                  {key}
                </Component>
              );
            })}
          </Card>
          <Card
            as={BaseStyles}
            sx={{
              marginTop: [3, 4],
              p: { fontSize: 2 },
            }}
          >
            <p>
              This is a whole paragraph of text, include{' '}
              <code>code like this</code>, as well as{' '}
              <a href="#">
                <code>linked code</code>
              </a>
              {' & '}
              <a href="#">regular links</a>. The paragraph ended up being 1
              sentence, but now I guess it’s <strong>two</strong>.
            </p>
            <pre>
              <code>Here’s a code block! No highlighting to be found.</code>
            </pre>
          </Card>
          <Heading variant="headline">Buttons</Heading>
          {Object.keys(theme.buttons).map((key) => (
            <Button key={key} variant={key} sx={{ mr: 3, mb: 3 }}>
              {key}
            </Button>
          ))}
          <Heading variant="headline">Cards</Heading>
          <Grid
            columns={[null, 2, 3]}
            gap={3}
            sx={{
              code: { fontSize: 0, marginLeft: -1, marginTop: 1 },
            }}
          >
            {Object.keys(theme.cards).map((key) => (
              <Card variant={key} key={key} sx={{ padding: [3, 4] }}>
                {key}
              </Card>
            ))}
          </Grid>
          <Heading variant="headline">Forms</Heading>
          <Grid gap={3} columns={[null, 2]} as="form" variant="cards.sunken">
            <Label>
              Label
              <Input placeholder="Placeholder" />
            </Label>
            <Label>
              Label
              <Select>
                <option value="" disabled hidden>
                  Select one…
                </option>
                <option value="one">Option one</option>
                <option value="two">Option two</option>
                <option value="three">Option three</option>
                <option value="four">Option four</option>
              </Select>
            </Label>
            <Label variant="labelHoriz">
              <Checkbox />
              Remember
            </Label>
            <Flex sx={{ flexWrap: 'wrap' }}>
              <Label variant="labelHoriz">
                <Radio name="letter" /> Alpha
              </Label>
              <Label variant="labelHoriz">
                <Radio name="letter" /> Bravo
              </Label>
              <Label variant="labelHoriz">
                <Radio name="letter" /> Charlie
              </Label>
            </Flex>
            <Label>
              Label
              <Textarea placeholder="Write a few sentences." />
            </Label>
            <Label>
              Slider
              <Slider color="red" />
            </Label>
            <Button
              as="button"
              type="submit"
              sx={{ gridColumn: [null, 'span 2'] }}
            >
              Submit
            </Button>
          </Grid>
          <Heading variant="headline">Badges</Heading>
          <Flex sx={{ flexWrap: 'wrap' }}>
            {Object.keys(theme.badges).map((key) => (
              <Badge
                key={key}
                variant={key}
                sx={{
                  ...(key === 'outline' ? { color: 'neutral' } : {}),
                  marginBottom: 2,
                  marginRight: 3,
                }}
              >
                {key}
              </Badge>
            ))}
          </Flex>
          <Heading variant="headline">Colors</Heading>
          <ColorPalette omit={['placeholder']} />
          <TypeScale />
          <Text as="pre" variant="styles.pre">
            {JSON.stringify(theme, null, 2)}
          </Text>
        </Container>
      </Box>
    </React.Fragment>
  );
}
