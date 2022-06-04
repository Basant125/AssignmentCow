import React from "react";
import "../../sass/Sidebar.scss"
import logo from '../../asset/logo.png'
import profile from '../../asset/profile.png'
import video from '../../asset/video.png';
import record from '../../asset/record.png'


const Sidebar = ({ active }) => {
    console.warn(active)
    return <div>
        <div className="sidebar">
            <div className="sidebar_links">
                <div className="sidebar_logo">
                    <img src={logo}></img>
                </div>
                <div className="sidebar_video">
                    <img src={video} />
                </div>
                <div className="sidebar_record">
                    <img src={record} />
                </div>
            </div>
            <div className="sidebar_profile">
                <img src={profile}></img>
            </div>
        </div>
        {
            active ? (
                <div className="mobile-sidebar">
                    <div className="sidebar_links">
                        <div className="sidebar_logo">
                            <img src={logo}></img>
                        </div>
                        <div className="sidebar_video sidebar_active">
                            <img src={video} />
                        </div>
                        <div className="sidebar_record">
                            <img src={record} />
                        </div>
                    </div>
                    <div className="sidebar_profile">
                        <img src={profile}></img>
                    </div>
                </div>
            ) : ''
        }
    </div>
};

export default Sidebar;
