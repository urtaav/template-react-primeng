
import BlockViewer from "../../../components/BlockViewer/BlockViewer"
import { classNames } from "primereact/utils";


import { Link, Outlet, useLocation } from 'react-router-dom';


const HomeComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)
  return (
    <div className="surface-overlay shadow-2 flex relative lg:static justify-content-between" style={{ minHeight: '42px' }}>
    <div className="hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
      <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
        <Link
          to={'/router/route1'}
          className={classNames({ 'lg:border-bottom-2 border-blue-500': pathname === '/router/route1' })}
          tabIndex={0}
        >
          <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none  transition-colors transition-duration-150 py-3 lg:py-0 px-3">
            <span className="pi pi-home mr-2"></span>
            <span className="font-medium">Home</span>
            <span role="presentation" className="p-ink" style={{ height: '100px', width: '100px' }}></span>
          </a>

        </Link>
        <Link
          to={'/router/route2'}
          className={classNames({ 'lg:border-bottom-2 border-blue-500': pathname === '/router/route2' })}
          tabIndex={1}
        >
          <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none  transition-colors transition-duration-150 py-3 lg:py-0 px-3">
            <span className="pi pi-home mr-2"></span>
            <span className="font-medium">About</span>
            <span role="presentation" className="p-ink" style={{ height: '100px', width: '100px' }}></span>
          </a>

        </Link>
      </ul>
    </div>
  </div>
  )
};


export const Route1 = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-12 flex align-items-center justify-content-center">
            <section>
                <span className="block text-6xl font-bold mb-1">Home works!</span>                              
            </section>
        </div>
    </div>
  )
}

export const Route2 = () => {
  return (
    <div className="grid grid-nogutter surface-0 text-800">
    <div className="col-12 md:col-12 flex align-items-center justify-content-center">
        <section>
            <span className="block text-6xl font-bold mb-1">About works!</span>                              
        </section>
    </div>
</div>
  )
}
const ReactRouterComponent = () => {
  const block1 = ``;
  return (
    <>
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <div className="grid">
              <div className="col-12">
                <h1 className="text-6xl text-primary font-bold mb-3">React Router</h1>
                <p className="mt-0 mb-3 line-height-3 text-700">
                  React Router es una librería de enrutamiento construida sobre React, donde, nos va a permitir crear enrutamiento dinámico de manera sencilla y simple.
                </p>
                <p>
                  <a href="https://reactrouter.com/en/main" target="_blank">Show more here</a>
                </p>
              </div>
              <div className="col-12">
                <BlockViewer header="Example:" code={block1} >
                  <div className="grid grid-nogutter surface-0 text-800">
                    <div className="col-12 md:col-12 p-2 ">
                      <div className="grid">
                        <div className="col-12">
                                <HomeComponent/>                             
                        </div>
                        <div className="col-12">
                        <Outlet/>    
                        </div>
                      </div>
                    </div>
                  </div>
                </BlockViewer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ReactRouterComponent;
