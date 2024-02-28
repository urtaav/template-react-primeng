
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
      label: 'Pages',
      icon: 'pi pi-fw pi-briefcase',
      to: '/pages',
      items: [
        {
          label: 'Landing',
          icon: 'pi pi-fw pi-globe',
          to: '/landing'
        },
        {
          label: 'Auth',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Login',
              icon: 'pi pi-fw pi-sign-in',
              to: '/auth/login'
            },
            {
              label: 'Error',
              icon: 'pi pi-fw pi-times-circle',
              to: '/auth/error'
            },
            {
              label: 'Access Denied',
              icon: 'pi pi-fw pi-lock',
              to: '/auth/access'
            }
          ]
        },
        {
          label: 'Crud',
          icon: 'pi pi-fw pi-pencil',
          to: '/pages/crud'
        },
        {
          label: 'Timeline',
          icon: 'pi pi-fw pi-calendar',
          to: '/pages/timeline'
        },
        {
          label: 'Not Found',
          icon: 'pi pi-fw pi-exclamation-circle',
          to: '/pages/notfound'
        },
        {
          label: 'Empty',
          icon: 'pi pi-fw pi-circle-off',
          to: '/pages/empty'
        }
      ]
    },
    {
      label: 'Prime Blocks',
      items: [
        { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
        { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://blocks.primereact.org', target: '_blank' }
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
