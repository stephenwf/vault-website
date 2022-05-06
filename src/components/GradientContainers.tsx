import { styled } from '../../stitches.config';

const Base = styled('div', {
  padding: '2em',
});

const Purple = styled(Base, {
  backgroundPosition: '-50%',
  background: 'radial-gradient(circle at top, #5F60CA, #CA58F4);',
});

const Teal = styled(Base, {
  backgroundPosition: '-50%',
  background: 'radial-gradient(circle at top, #58E0F4, #5F69CA);',
});
const Green = styled(Base, {
  backgroundPosition: '-50%',
  background: 'radial-gradient(circle at top, #CDFF8B, #5FCAB6);',
});

export const GradientContainers = { Purple, Teal, Green };
