import styled from 'styled-components';

export const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  padding: 5px 5px 5px 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.03);
  gap: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;

  .name {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #1e293b;
    line-height: 1.1;
  }

  .email {
    margin: 0;
    font-size: 11px;
    font-weight: 500;
    color: #1e293b;
  }
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;

  .admin-link {
    color: #3a97e8;
    display: flex;
    align-items: center;
    font-size: 14px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2) rotate(15deg);
    }
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  .badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    background: #3a97e8;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const LogoutBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  border: none;
  background: #fee2e2;
  color: #ef4444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ef4444;
    color: white;
    transform: rotate(15deg);
  }
`;
