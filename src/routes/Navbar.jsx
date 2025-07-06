import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Flex, Segmented } from 'antd';
import './Navbar.css';

export const Navbar = () => {
  const { pathname } = useLocation();

  // Стиль контейнера с эффектом стекла
  const containerStyle = {
    position: 'fixed',
    bottom: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'inline-flex',
    height: '48px',
    minWidth: '300px',
    alignItems: 'center',
    zIndex: 999,
    paddingBottom: 'env(safe-area-inset-bottom, 12px)',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  // Базовые стили для ссылок
  const baseItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    height: '32px',
    background: 'transparent',
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  // Стили для активной ссылки
  const activeItemStyle = {
    ...baseItemStyle,
    background: 'rgba(255, 255, 255, 0.4)',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    fontWeight: 500,
  };

  // Кастомный компонент перехода по страницам
  const LinkItem = ({ value, children }) => (
    <RouterLink
      to={value}
      style={pathname === value ? activeItemStyle : baseItemStyle}
    >
      {children}
    </RouterLink>
  );

  //svg для weekly
  const WhiteLineChart = () => (
    <svg width="25" height="25" viewBox="0 0 1024 1024" fill="white">
      <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z" />
      <path d="M704 320h-56c-4.4 0-8 3.6-8 8v336c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V328c0-4.4-3.6-8-8-8z" />
      <path d="M464 456h-56c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V464c0-4.4-3.6-8-8-8z" />
      <path d="M304 584h-56c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8z" />
    </svg>
  );
  //svg для cases
  const AppstoreWhite = () => (
    <svg width="25" height="25" viewBox="0 0 1024 1024" fill="white">
      <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zM864 144H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zM864 544H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z" />
    </svg>
  );
  //svg для profile
  const UserWhite = () => (
    <svg width="25" height="25" viewBox="0 0 1024 1024" fill="white">
      <path d="M858.5 763.6c-18.9-44.8-46.1-85-80.6-119.5-34.5-34.5-74.7-61.6-119.5-80.6-0.4-0.2-0.8-0.3-1.2-0.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-0.4 0.2-0.8 0.3-1.2 0.5-44.8 18.9-85 46-119.5 80.6-34.5 34.5-61.6 74.7-80.6 119.5C146.9 807.5 137 854 136 901.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c0.1 4.4 3.6 7.8 8 7.8h60c4.5 0 8.1-3.7 8-8.2-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
    </svg>
  );
  const Fire = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L5 14H11V21L19 10H13V3Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
  //привязываем ссылки к кнопкам в меню
  const options = [
    {
      label: (
        <LinkItem value="/soldax/">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AppstoreWhite />
            <div style={{ fontSize: '12px', height: 20 }}>Main</div>
          </div>
        </LinkItem>
      ),
      value: '/soldax/',
    },
    {
      label: (
        <LinkItem value="/soldax/cases">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Fire />
            <div style={{ fontSize: '12px', height: 20 }}>Cases</div>
          </div>
        </LinkItem>
      ),
      value: '/soldax/cases',
    },
    {
      label: (
        <LinkItem value="/soldax/weekly">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <WhiteLineChart />
            <div style={{ fontSize: '12px', height: 20 }}>Weekly</div>
          </div>
        </LinkItem>
      ),
      value: '/soldax/weekly',
    },
  ];

  return (
    <Flex gap="small" align="flex-start" vertical style={containerStyle}>
      <Segmented
        className="glass-segmented"
        options={options}
        value={pathname}
      />
    </Flex>
  );
};
