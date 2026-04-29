import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1300px;
  z-index: 1000;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  padding: 8px 20px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  padding: 10px 18px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  background: transparent;
  color: white;
  border: 1px solid transparent;

  svg {
    font-size: 18px;
    color: white;
    transition: color 0.2s ease;
  }

  &:hover {
    color: #1e293b;
    background: #f8fafc;

    svg {
      color: #64748b;
    }
  }

  &.active {
    background: transparent;
    color: white;
    font-weight: 600;
    border: 1px solid #3a97e8;

    svg {
      color: #3a97e8;
    }
  }
`;

export const AccentLink = styled(StyledNavLink)`
  border: 1px solid #e2e8f0;

  &.active {
    border: 1px solid #3a97e8;
  }
`;

export const NavButtonsGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding-right: 15px;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  img {
    height: 40px;
    width: auto;
  }
`;
