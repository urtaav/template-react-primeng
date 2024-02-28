
import React, { useContext, useEffect, useRef } from 'react'
import '../styles/layout/layout.scss';
import AppTopbar from './AppTopbar';
import AppSidebar from './AppSidebar';
import { LayoutContext } from './context/layoutcontext';
import { useEventListener, useUnmountEffect } from 'primereact/hooks';
import { useLocation ,useSearchParams } from 'react-router-dom';
import { AppTopbarRef, LayoutState } from '../types/layout';
import { classNames } from 'primereact/utils';
import AppConfig from './AppConfig';
import AppFooter from './AppFooter';

interface RootLayoutProps {
    children: React.ReactNode;
}


const Layout = ({ children }: RootLayoutProps) => {
    const { layoutConfig, layoutState, setLayoutState} = useContext(LayoutContext);
    const topbarRef = useRef<AppTopbarRef>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    
    const [bindMenuOutsideClickListener, unbindMenuOutsideClickListener] = useEventListener({
        type: 'click',
        listener: (event) => {
            const isOutsideClicked = !(
                sidebarRef.current?.isSameNode(event.target as Node) ||
                sidebarRef.current?.contains(event.target as Node) ||
                topbarRef.current?.menubutton?.isSameNode(event.target as Node) ||
                topbarRef.current?.menubutton?.contains(event.target as Node)
            );

            if (isOutsideClicked) {
                hideMenu();
            }
        }
    });
    const location = useLocation();
    const pathname = location.pathname;
    const [searchParams] = useSearchParams();

    useEffect(() => {
        hideMenu();
        
    }, [pathname,searchParams])
    
    const hideMenu = () => {
        setLayoutState((prevLayoutState: LayoutState) => ({
            ...prevLayoutState,
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            menuHoverActive: false
        }));
        unbindMenuOutsideClickListener();
        unblockBodyScroll();
    };

    const blockBodyScroll = (): void => {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    };

    const unblockBodyScroll = (): void => {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    useEffect(() => {
        if (layoutState.overlayMenuActive || layoutState.staticMenuMobileActive) {
            bindMenuOutsideClickListener();
        }

        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [layoutState.overlayMenuActive, layoutState.staticMenuMobileActive]);

    useUnmountEffect(() => {
        unbindMenuOutsideClickListener();
    });
    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'p-input-filled': layoutConfig.inputStyle === 'filled',
        'p-ripple-disabled': !layoutConfig.ripple
    });
    return (
        <>
            <div className={containerClass}>
                {/* topbar here  */}
                <AppTopbar ref={topbarRef}/>
                <div ref={sidebarRef} className="layout-sidebar">
                    {/* sidebar here  */}
                    <AppSidebar/>
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">

                        {/* contet here  */}
                        {children}
                        {/* footer here  */}
                        <AppFooter/>
                    </div>
                </div>
                {/* config  here  */}
                <AppConfig/>
                <div className="layout-mask"></div>
            </div>
        </>
    )
}

export default Layout
