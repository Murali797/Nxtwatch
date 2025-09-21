import styled from 'styled-components'

// Outer wrapper
export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`

// Shared nav
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;  /* logo left, side right */
  align-items: center;
  padding: 16px 24px;
  width: 100%;
`

export const Logo = styled.img`
  width: 120px;
  height: auto;
  cursor: pointer;
`

export const Side = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; /* equal spacing between items */
`

export const IconBtn = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  color: ${({theme}) => theme.text};
`

export const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`

export const LogoutBtn = styled.button`
  background: white;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  font-size: 14px;
  font-weight: bold;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
`

// Responsive wrappers
export const MobileHeader = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LaptopHeader = styled.div`
  display: none;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const HamburgerItem = styled.div`
margin: 0 8px;
a {
  text-decoration: none;
  color: ${({theme}) => theme.text};
  font-size: 16px;
}
`
export const HamburgerMenu = styled.div`
  position: absolute;
  top: 60px; /* below header */
  right: 0;
  background-color: ${({theme}) => theme.bg};
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  z-index: 1000;
`

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

export const PopupBox = styled.div`
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  min-width: 300px;
  max-width: 90%;
`

export const PopupTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`

export const PopupActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

export const CancelBtn = styled.button`
  flex: 1;
  padding: 10px;
  border: 1px solid #aaa;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
`

export const ConfirmBtn = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background: blue;
  color: #fff;
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background: #dc2626;
  }
`
