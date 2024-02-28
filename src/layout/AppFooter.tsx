const AppFooter = () => {
    return (
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div className="border-top-1 border-300 pt-5 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Image" height="36" />
                <ul className="list-none p-0 mx-0 my-5 flex justify-content-center flex-column align-items-center lg:flex-row">
                    <li>
                        <a className="text-600 cursor-pointer line-height-3 lg:mr-5">About Us</a>
                    </li>
                    <li><a className="text-600 cursor-pointer line-height-3 lg:mr-5">News</a>
                    </li>
                    <li><a className="text-600 cursor-pointer line-height-3 lg:mr-5">Investor Relations</a></li><li>
                        <a className="text-600 cursor-pointer line-height-3 lg:mr-5">Careers</a></li><li>
                        <a className="text-600 cursor-pointer line-height-3">Media Kit</a>
                    </li></ul><div className="flex align-items-center justify-content-center mb-5">
                    <a className="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5"
                        style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-twitter"></i>
                    </a><a className="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center mr-5" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-facebook"></i></a>
                    <a className="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center" style={{ width: '2.5rem', height: '2.5rem' }}><i className="pi pi-github"></i></a></div><div className="text-center"><a className="mr-5 text-sm text-600 cursor-pointer">Privacy Policy</a>
                    <a className="text-sm text-600 cursor-pointer">Terms of Service</a></div></div></div>
    )
}

export default AppFooter
