import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
      <AlternateHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <Icon id="shopping-bag" strokeWidth={1} />
          <Icon id="search" strokeWidth={1} />
          <Icon id="menu" strokeWidth={1} />
        </Nav>
      </AlternateHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};
 
const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.laptopAndDown} {
    display: none;
  }
`;

const AlternateHeader = styled.div`
  display: none;
  align-items: baseline;
  justify-content: flex-end;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.laptopAndDown} {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${QUERIES.laptopAndDown} {
    margin: 0px;
    display: flex;
    gap: 48px;
  }
  @media ${QUERIES.tabletAndDown} {
    gap: 34px;
  }
  @media ${QUERIES.mobileAndDown} {
    gap: 20px
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
