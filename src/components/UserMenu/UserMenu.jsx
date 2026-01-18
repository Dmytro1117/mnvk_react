import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Tooltip } from 'antd';
import { LogoutOutlined, SettingOutlined, CameraOutlined } from '@ant-design/icons';
import { logOut, updateAvatar } from '../../redux/auth/operationsAuth';
import { selectUser } from '../../redux/auth/authSelectors';
import { WrapperUser, UserInfo, LogoutBtn, AvatarWrapper, NameRow } from './Usermenu.styled';

export const UserMenu = () => {
  const { email, name, avatar, role } = useSelector(selectUser);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  return (
    <WrapperUser>
      <UserInfo>
        <NameRow>
          <p className="name">{name}</p>
          {role === 'admin' && (
            <Tooltip title="Адмін-панель">
              <Link to="/admin/add-profession" className="admin-link">
                <SettingOutlined />
              </Link>
            </Tooltip>
          )}
        </NameRow>
        <p className="email">{email}</p>
      </UserInfo>

      <AvatarWrapper onClick={() => fileInputRef.current.click()}>
        <Avatar src={avatar} size={42} style={{ border: '2px solid #3a97e8' }}>
          {name?.charAt(0).toUpperCase()}
        </Avatar>
        <div className="badge">
          <CameraOutlined />
        </div>
      </AvatarWrapper>

      <input
        type="file"
        ref={fileInputRef}
        hidden
        accept="image/*"
        onChange={e => dispatch(updateAvatar(e.target.files[0]))}
      />

      <Tooltip title="Вийти">
        <LogoutBtn onClick={() => dispatch(logOut())}>
          <LogoutOutlined />
        </LogoutBtn>
      </Tooltip>
    </WrapperUser>
  );
};
