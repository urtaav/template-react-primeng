
import { useRoutes } from 'react-router-dom'
import EmptyPage from '../(main)/pages/empty/empty';
import Dashboard from '../(main)/pages/dashboard/dashboard';

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

        ]
    )
}

export default _Routes
