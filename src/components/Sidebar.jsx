import React from 'react'
const Sidebar = () => {
    return (
        <>
            <div className="d-flex flex-column text-white fixed-top  bg-dark" style={{height:'100vh',width:'300px',marginTop:'100px'}}>
                <div className="d-flex align-items-center">
                    <i class="bi bi-diamond-half"></i>
                    <div className="ps-2 menu-name">Dashboard</div>
                </div>

                <div className="d-flex align-items-center">
                    <i class="bi bi-diamond-half"></i>
                    <div className="ps-2 menu-name">Dashboard</div>
                </div>

                <div className="d-flex align-items-center">
                    <i class="bi bi-diamond-half"></i>
                    <div className="ps-2 menu-name">Dashboard</div>
                </div>

                <div className="d-flex align-items-center">
                    <i class="bi bi-diamond-half"></i>
                    <div className="ps-2 menu-name">Dashboard</div>
                </div>
            </div>
        </>
    )
}
export default Sidebar