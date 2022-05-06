import { Link } from 'react-router-dom';
import { Heading1 } from '../components/Heading1';
import { globalStyles } from '../global-styles';
import { Container } from '../components/Container';
import { HeadingTagline } from '../components/HeadingTagline';
import { Highlight } from '../components/Highlight';
import { LinkButton, LinkButtonIcon } from '../components/LinkButton';
import { HomepageSection } from '../components/HomepageSection';
import { GradientContainers } from '../components/GradientContainers';
import { CustomSandpack } from '../components/CustomSandpack';
import { Heading2 } from '../components/Heading2';
import { HomepageGrid } from '../components/HomepageGrid';

export function IndexPage() {
  const load = (
    <Highlight href="#load" color="purple">
      Load
    </Highlight>
  );

  return (
    <>
      <Container layout="center">
        <Heading1>Vault</Heading1>
        <HeadingTagline>IIIF Library for IIIF Library creators.</HeadingTagline>
        <HeadingTagline css={{ marginBottom: '2.5em' }}>
          <Highlight href="#load" color="purple">
            Load
          </Highlight>
          ,{' '}
          <Highlight href="#upgrade" color="teal">
            upgrade
          </Highlight>{' '}
          and{' '}
          <Highlight href="#normalize" color="green">
            normalize
          </Highlight>{' '}
          IIIF resources and develop against predictable modern IIIF
        </HeadingTagline>
        <LinkButton as={Link} to={`/docs`}>
          Get started
        </LinkButton>
      </Container>
      <Container>
        <HomepageSection.Container id="load">
          <HomepageSection.HeadingContainer>
            <HomepageSection.Title color="purple">Load</HomepageSection.Title>
            <HomepageSection.Paragraph>
              Quickly load IIIF Manifests and Collections into a Vault from both the browser and from node.
            </HomepageSection.Paragraph>
          </HomepageSection.HeadingContainer>
          <HomepageSection.Example>
            <GradientContainers.Purple>
              <CustomSandpack
                template="vanilla"
                customSetup={{
                  dependencies: {
                    '@iiif/vault': '*',
                  },
                  files: {
                    '/index.html': `
<!DOCTYPE html>
<html>
<head>
  <title>@iiif/vault</title>
  <meta charset="UTF-8" />
</head>
<body>
  <script src="src/index.js"></script>
</body>
</html>`.trim(),
                    '/src/index.js': `
import { Vault } from '@iiif/vault';

const vault = new Vault();

const manifestUri = 'https://iiif.wellcomecollection.org/presentation/v2/b18035723';

vault
  .loadManifest(manifestUri)
  .then((manifest) => {
    console.log(manifest.label);
  });


`.trim(),
                  },
                }}
              />
            </GradientContainers.Purple>
          </HomepageSection.Example>
        </HomepageSection.Container>
        <HomepageSection.Container id="upgrade">
          <HomepageSection.HeadingContainer>
            <HomepageSection.Title color="teal">Upgrade</HomepageSection.Title>
            <HomepageSection.Paragraph>
              Upgrade IIIF presentation 2 manifests and collections to modern IIIF presentation 3. Develop against the
              latest specification.
            </HomepageSection.Paragraph>
          </HomepageSection.HeadingContainer>
          <HomepageSection.Example>
            <GradientContainers.Teal>
              <CustomSandpack
                template="vanilla"
                color="#999"
                activePath="/presentation.json"
                autorun={false}
                customSetup={{
                  dependencies: {
                    '@iiif/vault': '*',
                    '@iiif/parser': '*',
                  },
                  files: {
                    '/presentation.json': `{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "...",
  "@type": "sc:Manifest",
  "label": "Wunder der Vererbung / von Fritz Bolle.",
  "metadata": [
    {
      "label": "Publication/creation",
      "value": "Murnau ; München : Sebastian Lux, [1951]"
    }
  }
}`,
                  },
                }}
              />
              <CustomSandpack
                template="vanilla"
                color="#76F29A"
                activePath="/presentation.json"
                autorun={false}
                customSetup={{
                  dependencies: {
                    '@iiif/vault': '*',
                    '@iiif/parser': '*',
                  },
                  files: {
                    '/presentation.json': `{
  "@context": "http://iiif.io/api/presentation/3/context.json",
  "id": "...",
  "type": "Manifest",
  "label": {"en":["Wunder der Vererbung / von Fritz Bolle."]},
  "metadata": [
    {
      "label": {"en":["Publication/creation"]},
      "value": {"none":["Murnau ; München : Sebastian Lux, [1951]"]}
    }
  ]
}`,
                  },
                }}
              />
            </GradientContainers.Teal>
          </HomepageSection.Example>
        </HomepageSection.Container>
        <HomepageSection.Container id="normalize">
          <HomepageSection.HeadingContainer>
            <HomepageSection.Title color="green">Normalize</HomepageSection.Title>
            <HomepageSection.Paragraph>
              Break down nested IIIF into a flat structure. Fix any missing properties, with sensible defaults. If it
              should be an array, it will be an array. Write less code to check for valid IIIF.
            </HomepageSection.Paragraph>
          </HomepageSection.HeadingContainer>
          <HomepageSection.Example>
            <GradientContainers.Green>
              <CustomSandpack
                template="vanilla"
                activePath="/presentation.json"
                autorun={false}
                color="#E1F49A"
                customSetup={{
                  dependencies: {
                    '@iiif/vault': '*',
                    '@iiif/parser': '*',
                  },
                  files: {
                    '/presentation.json': `{
  "Manifest": {
    "https://example.org/manifest-1": {
       "id": "https://example.org/manifest-1",
       "type": "Manifest",
       "label": {"en":["Manifest label"]},
       "items": [
         {"id": "https://example.org/manifest-1/c1", "type": "Canvas"},
         {"id": "https://example.org/manifest-1/c3", "type": "Canvas"},
         {"id": "https://example.org/manifest-1/c3", "type": "Canvas"}
       ]
       // ...
    },
  },
  "Canvas": {
    "https://example.org/manifest-1/c1": {
      // ..
    },
    "https://example.org/manifest-1/c2": {
      // ..
    },
    "https://example.org/manifest-1/c3": {
      // ..
    }
  }, 
  // ..
}`,
                  },
                }}
              />
            </GradientContainers.Green>
          </HomepageSection.Example>
        </HomepageSection.Container>
      </Container>
      <Container layout="center" background="blue">
        <Heading2>By why?</Heading2>
        <HeadingTagline color="purple">Strongly typed IIIF resources.</HeadingTagline>
        <HeadingTagline color="blue">Reusable code with references.</HeadingTagline>
        <HeadingTagline color="lightblue">Less code. Less errors.</HeadingTagline>
        <HeadingTagline color="brightgreen">Edit IIIF using subscriptions.</HeadingTagline>
        <HeadingTagline color="yellow">Keep non-IIIF state organised.</HeadingTagline>
      </Container>

      <Container>
        <HomepageGrid>
          <HomepageSection.Container>
            <HomepageSection.HeadingContainer small>
              <HomepageSection.Title color="purple" small>
                Strongly typed IIIF resources.
              </HomepageSection.Title>
              <HomepageSection.Paragraph small>
                Upgrade IIIF presentation 2 manifests and collections to modern IIIF presentation 3. Develop against the
                latest specification.
              </HomepageSection.Paragraph>
              <HomepageSection.Paragraph small>
                If you are using Typescript in your project, you can access and use these types in your own code. The
                types reflect the runtime-guarentees from Vault.
              </HomepageSection.Paragraph>
            </HomepageSection.HeadingContainer>
            <LinkButton backgroundColor="purple">
              Typescript guide
              <LinkButtonIcon />
            </LinkButton>
          </HomepageSection.Container>

          <HomepageSection.Container>
            <HomepageSection.HeadingContainer small>
              <HomepageSection.Title color="blue" small>
                Reusable code with references.
              </HomepageSection.Title>
              <HomepageSection.Paragraph small>
                Although it may be considered a downside, the way vault splits relations between resources into
                "references" allows you to pass stable identifiers around your application.
              </HomepageSection.Paragraph>
              <HomepageSection.Paragraph small>
                Components in your application can use these references to grab as much or as little data from the Vault
                as they need.
              </HomepageSection.Paragraph>
              <LinkButton backgroundColor="blue">
                Reference guide
                <LinkButtonIcon />
              </LinkButton>
            </HomepageSection.HeadingContainer>
          </HomepageSection.Container>
          <HomepageSection.Container>
            <HomepageSection.HeadingContainer small>
              <HomepageSection.Title color="lightblue" small>
                Less code, less errors
              </HomepageSection.Title>
              <HomepageSection.Paragraph small>
                Every resource - Manifest, Canvas, Range, Collection, Content resource - has a set of default
                properties. You no longer need to check for the existence of properties, or do array checks.
              </HomepageSection.Paragraph>
              <HomepageSection.Paragraph small>
                Vault applies these changes when importing, so you can skip checking the data and focus on your
                features.
              </HomepageSection.Paragraph>
              <LinkButton backgroundColor="lightblue">
                View defaults
                <LinkButtonIcon />
              </LinkButton>
            </HomepageSection.HeadingContainer>
          </HomepageSection.Container>
          <HomepageSection.Container>
            <HomepageSection.HeadingContainer small>
              <HomepageSection.Title color="brightgreen" small>
                Edit IIIF using subscriptions.
              </HomepageSection.Title>
              <HomepageSection.Paragraph small>
                Vault has some primitive methods for editing IIIF resources inside of a Vault and also subscribing to
                changes to IIIF resources.
              </HomepageSection.Paragraph>
              <HomepageSection.Paragraph small>
                Framework integrations to these subscription methods make for an easy and reactive way to edit IIIF.
              </HomepageSection.Paragraph>
            </HomepageSection.HeadingContainer>
            <LinkButton backgroundColor="brightgreen">
              Subscriptions
              <LinkButtonIcon />
            </LinkButton>
          </HomepageSection.Container>
          <HomepageSection.Container>
            <HomepageSection.HeadingContainer small noBorder={{ '@lg': true }}>
              <HomepageSection.Title color="yellow" small>
                Keep non-IIIF state organised.
              </HomepageSection.Title>
              <HomepageSection.Paragraph small>
                Vault has methods for reading, writing and subscribing to data adjacent to IIIF resources that are not
                part of the IIIF data itself.
              </HomepageSection.Paragraph>
              <HomepageSection.Paragraph small>
                The "events" vault helper uses this to make an add event listener API to IIIF resources. With this API
                you can add a "click" event to a canvas, storing that data in the Vault, and then elsewhere in your app
                retrieve all of the events that have been added.
              </HomepageSection.Paragraph>
            </HomepageSection.HeadingContainer>
            <LinkButton backgroundColor="yellow">
              More on meta
              <LinkButtonIcon />
            </LinkButton>
          </HomepageSection.Container>
        </HomepageGrid>
      </Container>
    </>
  );
}
