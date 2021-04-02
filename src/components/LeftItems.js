import React from 'react'
import './LeftItems.css'
import AddIcon from '@material-ui/icons/Add';
import DnsIcon from '@material-ui/icons/Dns';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import RightIcons from './RightIcons'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';





function LeftItems({text, mydrive, sharedWithMe, recent, started, bin, storage}) {



          return (
                    <div className='LeftItems'>
                              <div className='LeftItems__one'>
                                        <div className='text'>
                                        <AddIcon className='addIcon'/>
                                        <p>{text}</p>
                                        </div>

                                        <div className='mydrive'>
                                                <DnsIcon/>
                                                <p>{mydrive}</p>  
                                        </div>

                                        <div className='sharedWithMe'>
                                                <SupervisorAccountIcon/>
                                                <p>{sharedWithMe} </p> 
                                        </div>

                                        <div className='recent'>
                                                <AccessTimeIcon/>
                                                <p>{recent}</p>  
                                        </div>

                                        <div className='started'>
                                                <StarBorderIcon/>
                                                <p>{started}</p>  
                                        </div>

                                        <div className='bin'>
                                                <DeleteIcon/>
                                                <p>{bin}</p>  
                                        </div>

                                        <hr/>

                                        <div className=''>
                                               <div className='bin'>
                                               <CloudQueueIcon/>
                                                <p>{storage}</p> 
                                               </div>

                                               <div className='storage_info'>
                                                         <div className='storageLine'></div>

                                                         <div className='remainingStorage'>
                                                                   <p>163.6 MB of 15 GB used</p>
                                                         </div>

                                                         <div className='buyButton'>
                                                                   <button>
                                                                             Buy storage
                                                                   </button>
                                                         </div>
                                               </div>
                                        </div>
                                        
                               </div>

                               <div className='second'>
                                        
                                        <div className='drive_arrow'>
                                        <p>My Drive</p>
                                        <ArrowDropDownIcon className='arroeDown'/>
                                        </div>

                                         <div className='infoLst'>
                                         <ListIcon className='listIcon'/>
                                         <InfoIcon className='infoIcon'/>
                                         </div>

                               </div>

                               <div>
                                       <RightIcons/>
                               </div>
                    </div>
          )
}

export default LeftItems
