// @flow
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import github from '@fortawesome/fontawesome-free-brands/faGithub';
import withProps from 'recompose/withProps';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


export default [
  {
    href: 'https://material-ui-next.com/',
    label: 'Material-UI',
    icon: KeyboardArrowRight,
  },
  {
    href: 'https://github.com/OrigenStudio/material-ui-layout/tree/develop/src',
    label: 'GitHub',
    icon: withProps({ icon: github, size: 'lg' })(FontAwesomeIcon),
  },
];
