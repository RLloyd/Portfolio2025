// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import {
  NavbarContainer,
  NavigationGroup,
  ControlsGroup,
  Logo,
  MenuItems,
  MenuItem,
  ThemeToggle,
  MobileMenuButton,
  MobileMenu
} from './Navbar.styles';
import { navigationData } from '@/data/mockData';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { menuItems: { left: leftMenuItems, right: rightMenuItems }, logo } = navigationData;

  return (
    <NavbarContainer>
      <NavigationGroup>
        <MenuItems className="left-menu">
          {leftMenuItems.map((item) => (
            <MenuItem key={item}>
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
            </MenuItem>
          ))}
        </MenuItems>

        <Logo>
          <Link to="/">
            <img
              src={logo.image}
              alt={logo.alt}
              loading="eager" // Makes sure logo loads immediately
            />
          </Link>
        </Logo>

        <MenuItems className="right-menu">
          {rightMenuItems.map((item) => (
            <MenuItem key={item}>
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
            </MenuItem>
          ))}
        </MenuItems>
      </NavigationGroup>

      <ControlsGroup>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkTheme ? <FiSun /> : <FiMoon />}
        </ThemeToggle>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </ControlsGroup>

      {isMobileMenuOpen && (
        <MobileMenu>
          {[...leftMenuItems, ...rightMenuItems].map((item) => (
            <MenuItem key={item} onClick={() => setIsMobileMenuOpen(false)}>
              <Link to={`/${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
            </MenuItem>
          ))}
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;