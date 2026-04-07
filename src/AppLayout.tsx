import { Layout, Menu } from 'antd';
import { useNavigate, useLocation, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import s from './AppLayout.module.scss';

const { Sider, Content } = Layout;

const menuItems = [
  { key: '/', label: 'Interview Bot', path: '/' },
  { key: '/dev/debounce', label: 'Debounce Test', path: '/dev/debounce' },
  { key: '/dev/transition', label: 'Transition Test', path: '/dev/transition' },
];

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const routesElement = useRoutes(routes);

  return (
    <Layout className={s.layout}>
      <Sider className={s.sider} theme="light" width={200}>
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems.map(({ key, label }) => ({ key, label }))}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Content className={s.content}>
          {routesElement}
        </Content>
      </Layout>
    </Layout>
  );
}
