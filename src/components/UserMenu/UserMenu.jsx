import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'antd';
import { LogoutOutlined, CameraOutlined } from '@ant-design/icons';
import { WrapperUser, ButtonLogout, AvatarWrapper, UserInfo, StyledTag, StatusRow } from './Usermenu.styled';
import { logOut, updateAvatar } from '../../redux/auth/operationsAuth';
import { selectUser } from '../../redux/auth/authSelectors';

export const UserMenu = () => {
  const { email, name, avatar } = useSelector(selectUser);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  return (
    <WrapperUser>
      <AvatarWrapper onClick={() => fileInputRef.current.click()}>
        <Avatar src={avatar} size={54} alt="User Avatar">
          {!avatar && name?.slice(0, 1).toUpperCase()}
        </Avatar>
        <div className="camera-badge">
          <CameraOutlined />
        </div>
      </AvatarWrapper>

      <input
        type="file"
        ref={fileInputRef}
        onChange={e => e.target.files[0] && dispatch(updateAvatar(e.target.files[0]))}
        style={{ display: 'none' }}
        accept="image/*"
      />

      <UserInfo>
        <p className="name">{name}</p>
        <StatusRow>
          <StyledTag>
            {/* <p className="name">{email}</p> */}
            <p className="name">{email?.slice(0, 1).toUpperCase()}</p>
          </StyledTag>
          <ButtonLogout onClick={() => dispatch(logOut())}>
            <LogoutOutlined />
            <span>Вийти</span>
          </ButtonLogout>
        </StatusRow>
      </UserInfo>
    </WrapperUser>
  );
};
