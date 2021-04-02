import React from 'react'
import './RightIcons.css'
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/Add';

function RightIcons() {
          return (
                    <div className='rightIcons'>
                            
                                      <div className='calender'>
                                           <EventAvailableIcon/>
                                      </div>

                                      <div className='keep'>
                                         <EmojiObjectsIcon/>
                                      </div>

                                      <div className='task'>
                                        <ListAltIcon/>
                                      </div>

                                      <div className='hr'>

                                      </div>

                                      <div className='addicon'>
                                                <AddIcon/>
                                      </div>
                     
                    </div>
          )
}

export default RightIcons
