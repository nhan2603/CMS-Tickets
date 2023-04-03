import React from 'react';
import './TrangChu.css';
//import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

function TrangChu() {
    return (
        <div className="container_home">
            <h2 className="home_title">Thống Kê</h2>
            <div className="home_title_top">
                <div className="text">
                    <h3 className="doanhthu">Doanh thu</h3>
                </div>
                <div className="lich">
                    <p>Tháng 4, 2023</p>
                    {/* <CalendarMonthOutlinedIcon /> */}
                </div>
            </div>
        </div>
    );
}

export default TrangChu;
