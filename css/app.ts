import { createUseStyles } from 'react-jss';
import { htmlFontSize, baselinePx, base } from './base';
import colors from './colors';
import { h1, h2, h3, h4, h5, body } from './type';
import queries from './queries';

export default createUseStyles({
  '@global': {
    'html, body': {
      margin: 0,
      color: colors.gray,
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: htmlFontSize,
      lineHeight: `${baselinePx}px`,
      backgroundColor: colors.antique,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    ul: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    li: {
      ...body,
    },
  },
  app: {
    height: '100%',
  },
});
