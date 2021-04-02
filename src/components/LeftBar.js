import React from 'react'
import './LeftBar.css'
import LeftItems from './LeftItems'


function LeftBar() {
          return (
                    <div className='leftBar_items'>
                              <LeftItems
                              text='New'
                              mydrive='My Drive'
                              sharedWithMe='Shared with me'
                              recent='Recent'
                              started='Started'
                              bin='Bin'
                              storage='Storage'
                              />
                    </div>
          )
}

export default LeftBar
