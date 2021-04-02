import React from 'react'
import './Headers.css'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Headers() {
          return (
                    <div>
                              <div className='header'>
                             <div className='header__left'>
                                       <FolderOpenIcon style={{ fontSize: 50 }}/>
                                       <p>Drive</p>
                             </div>

                             <div className='header__center'>
                                       <div>
                                                 <SearchIcon className='search_icon' style={{ fontSize: 25 }}/>
                                       </div>

                                       <div>
                                       <input placeholder='Search in Drive'/>
                                       </div>

                                       <div className='arrow_area'>
                                                 <ArrowDropDownIcon className='arrow_icon' style={{ fontSize: 25 }}/>
                                       </div>
                             </div>

                             <div className='header__right'>
                                       <div className='helpIcon'>
                                                <CheckCircleOutlineIcon  className='tick' style={{ fontSize: 25 }}/>
                                                <HelpOutlineIcon style={{ fontSize: 25 }} className='help'/>
                                                <SettingsIcon style={{ fontSize: 25 }} className='setting'/>
                                       </div>

                                       <div>
                                                 <AppsIcon className='menu' style={{ fontSize: 28 }}/>
                                                 <AccountCircleIcon className='userProfile' style={{ fontSize: 38 }}/>
                                       </div>
                             </div>

                    </div>

                    <div>
                              <hr/>
                    </div>
                    </div>
          )
}

export default Headers
