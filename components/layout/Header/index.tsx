import React from 'react';
import { Modal, useModal } from '@faceless-ui/modal';
import { Grid, Cell } from '@faceless-ui/css-grid';
import Link from 'next/link';
import useStyles from './css';
import Icon from '../../graphics/Icon';
import Hamburger from './Hamburger';
import GridContainer from '../GridContainer';

const menuSlug = 'menu';

const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { currentModal, toggle } = useModal();
  const menuActive = currentModal === menuSlug;
  const classes = useStyles({ menuActive });

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a href='/' className={classes.logo}>
          <Icon className={classes.icon} />
        </a>
      </Link>
      <button
        type='button'
        className={classes.menuButton}
        onClick={() => toggle(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>
      <Modal slug={menuSlug} className={classes.menu}>
        <GridContainer>
          <Grid>
            <Cell cols={8} htmlElement='nav'>
              {megaMenu?.nav?.map(({ link }, i) => (
                <h3 key={i}>{link.label}</h3>
              ))}
            </Cell>
            <Cell cols={3}>
              {socialMedia?.links?.map(({ url, label }) => (
                <a href={url} target="_blank" rel="noopener noreferrer" className={classes.secondaryNavItem}>
                  {label}
                </a>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
      </Modal>
    </header>
  );
};

export default Header;
