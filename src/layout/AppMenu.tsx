
import { AppMenuItem } from '../types';
import AppMenuItemComponent from './AppMenuItem';
import { MenuProvider } from './context/menucontext';

const AppMenu = () => {

  const model: AppMenuItem[] = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
      label: 'CLI Tools',
      items: [
        { label: 'Vite', icon: 'pi pi-exclamation-circle', url: 'https://vitejs.dev/', target: '_blank' },
        { label: 'Create React App', icon: 'pi pi-fw pi-globe', url: 'https://create-react-app.dev/', target: '_blank' }
      ]
    },
    {
      label: 'Components',
      to: '/components',
      items: [
        { label: 'Class Components', icon: 'pi pi-inbox', url: 'https://react.dev/learn/thinking-in-react#props-vs-state', target: '_blank' },
        {
          label: 'Functional Components',
          icon: 'pi pi-folder',
          items: [
            {
              label: 'JSX',
              icon: 'pi pi-file',
              to: '/components/jsx'
            },
            {
              label: 'Props vs State',
              icon: 'pi pi-file',
              to: '/components/prop-vs-state'
            },
            {
              label: 'Conditional Rendering',
              icon: 'pi pi-file',
              to: '/components/conditional-rendering'
            },
            {
              label: 'Composition',
              icon: 'pi pi-file',
              url: 'https://felixgerschau.com/react-component-composition/',
              target: '_blank'
            }
          ]
        }
      ]
    },
    {
      label: 'Rendering',
      to: '/rendering',
      items: [
        {
          label: 'Component Life Cycle',
          icon: 'pi pi-file',
          to: '/rendering/component-life-cycle'
        },
        {
          label: 'List and Keys',
          icon: 'pi pi-file',
          url: 'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key',
          target: '_blank'
        },
        {
          label: 'Render Props',
          icon: 'pi pi-file',
          url: 'https://react.dev/learn/passing-props-to-a-component',
          target: '_blank'
        },
        {
          label: 'Refs',
          icon: 'pi pi-file',
          to: '/rendering/refs'
        },
        {
          label: 'Events',
          icon: 'pi pi-file',
          url: 'https://es.react.dev/learn/responding-to-events',
          target: '_blank'
        },
        {
          label: 'High Order Components',
          icon: 'pi pi-file',
          to: '/rendering/hoc'
        },
      ]
    },
    {
      label: 'Hooks',
      items: [
        {
          label: 'All hooks',
          icon: 'pi pi-file',
          to: '/hooks'
        },
      ]
    },
    {
      label: 'Routers',
      items: [
        {
          label: 'React Router',
          icon: 'pi pi-file',
          to: '/router'
        },
        {
          label: 'Reach Router',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
    {
      label: 'State Management',
      items: [
        {
          label: 'Redux / Toolkit',
          icon: 'pi pi-file',
          url: 'https://react-redux.js.org/',
          target: '_blank'
        },
        {
          label: 'Zustand',
          icon: 'pi pi-file',
          url: 'https://zustand-demo.pmnd.rs/',
          target: '_blank'
        },
        {
          label: 'Context',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
    {
      label: 'Styling',
      items: [
        {
          label: 'Styled Components',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Tailwind',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Material UI',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Css Module',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
    {
      label: 'API Calls (REST)',
      items: [
        {
          label: 'SWR',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'react-query',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Axios',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'rtk-query',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
    {
      label: 'Testing',
      items: [
        {
          label: 'Jest',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
    {
      label: 'Frameworks',
      items: [
        {
          label: 'Remix',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Next.js',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
    {
      label: 'Forms',
      items: [
        {
          label: 'React Hook Form',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Formik',
          icon: 'pi pi-file',
          to: ''
        },
        {
          label: 'Final Form',
          icon: 'pi pi-file',
          to: ''
        },
      ]
    },
  ]
  return (
    <MenuProvider>
      <ul className='layout-menu'>
        {
          model.map((item, i) => {
            return !item?.seperator ? <AppMenuItemComponent item={item} root={true} index={i} key={item.label} /> : <li className='menu-separator'></li>;
          })
        }
      </ul>
    </MenuProvider>

  )
}

export default AppMenu
