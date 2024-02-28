import { forwardRef, useContext, useImperativeHandle, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AppTopbarRef } from '../types/index';
import { LayoutContext } from './context/layoutcontext';
const AppTopbar = forwardRef<AppTopbarRef>((props, ref)  => {

    const { onMenuToggle } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    
    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <div className='layout-topbar'>
            <Link to={'/'} className='layout-topbar-logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="47.22px" height={'35px'} alt="logo" />
                <span>React</span>
            </Link>
            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>
        </div>
    )
});

export default AppTopbar
