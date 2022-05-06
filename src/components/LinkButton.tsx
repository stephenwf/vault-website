import { styled } from '../../stitches.config';
import { SVGProps } from 'react';

export const LinkButton = styled('a', {
  backgroundColor: '#9F5BE3',
  display: 'block',
  borderRadius: 3,
  padding: '0.7em 2em',
  border: 'none',
  fontSize: '1.3em',
  fontWeight: '600',
  color: '#fff',
  textDecoration: 'none',
  margin: '1em auto',
  textAlign: 'center',
  maxWidth: '16em',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#783ab4',
  },
  '&:active': {
    boxShadow: 'inset 0 3px 10px 0 rgba(0,0,0,.3)',
  },

  variants: {
    backgroundColor: {
      white: {
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
        },
      },
      purple: {
        backgroundColor: '#9F5BE3',
        '&:hover': {
          backgroundColor: '#783ab4',
        },
      },
      lightblue: {
        backgroundColor: '#67A9D4',
        '&:hover': {
          backgroundColor: '#356d91',
        },
      },
      blue: {
        backgroundColor: '#7283CA',
        '&:hover': {
          backgroundColor: '#3c4b8c',
        },
      },
      teal: {
        backgroundColor: '#B5F1F3',
        '&:hover': {
          backgroundColor: '#6cb5b7',
        },
      },
      green: {
        backgroundColor: '#D8FE9A',
        '&:hover': {
          backgroundColor: '#99bd5e',
        },
      },
      brightgreen: {
        backgroundColor: '#5CB888',
        '&:hover': {
          backgroundColor: '#3c8a61',
        },
      },
      yellow: {
        backgroundColor: '#B1A85B',
        '&:hover': {
          backgroundColor: '#736c2f',
        },
      },
    },
  },
});

const LeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 48 48" {...props}>
      <path d="m28.05 35.9-2.15-2.1 8.4-8.4H8v-3h26.3l-8.45-8.45 2.15-2.1L40.05 23.9Z" fill="currentColor" />
    </svg>
  );
};

export const LinkButtonIcon = styled(LeftIcon, {
  fontSize: '1.25em',
  float: 'right',
});
