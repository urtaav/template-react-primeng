
import { useRoutes } from 'react-router-dom'
import EmptyPage from '../(main)/pages/empty/empty';
import Dashboard from '../(main)/pages/dashboard/dashboard';
import JsxPage from '../(main)/pages/jsx';
import PropsState from '../(main)/pages/props-vs-state';
import ConditionalRendering from '../(main)/pages/ConditionalRendering';
import ComponentLifeCycle from '../(main)/pages/Rendering/ComponentLifeCycle';
import RefsPage from '../(main)/pages/Rendering/Refs';
import HOCPage from '../(main)/pages/Rendering/HOC';
import HooksPage from '../(main)/pages/hooks/index';
import ReactRouterComponent, { Route1, Route2 } from '../(main)/pages/Routes/react-router';

const _Routes = () => {
    return useRoutes(
        [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/pages',
                children: [

                    {
                        path: 'empty',
                        element: <EmptyPage />,
                    }
                ]
            },
            {
                path: '/components',
                children: [

                    {
                        path: 'jsx',
                        element: <JsxPage />,
                    },
                    {
                        path: 'prop-vs-state',
                        element: <PropsState />,
                    },
                    {
                        path:'conditional-rendering',
                        element: <ConditionalRendering/>
                    }
                ]
            },
            {
                path: '/rendering',
                children: [

                    {
                        path: 'component-life-cycle',
                        element: <ComponentLifeCycle/>,
                    },
                    {
                        path: 'refs',
                        element: <RefsPage />,
                    },
                    {
                        path:'hoc',
                        element: <HOCPage/>
                    }
                ]
            },
            {
                path: '/hooks',
                element: <HooksPage/>
            },{
                path:'/router',
                element:<ReactRouterComponent/>,
                children:[
                    {
                        path:'route1',
                        element:<Route1/>
                    },
                    {
                        path:'route2',
                        element:<Route2/>
                    },
                ]
            }

        ]
    )
}

export default _Routes
