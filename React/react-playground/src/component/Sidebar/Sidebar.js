import * as React from 'react'

const Sidebar = ({sidebarRef}) => {

  return (
    <>
        <div className='sidebar' ref={sidebarRef}>
            <ul className='menu'>
                <li className='logo'>
                    <a href="/">Yixuan's Website</a>
                </li>

                <li className='item'>
                    <a href="/about">About</a>
                </li>

                <li className='item'>
                    <a href="/blog">Blog</a>
                </li>

                <li className='item'>
                    <a hrefo="/">Contact</a>
                </li>
            </ul>

            <ul className="interactive-area-1">
                <li className="item"><a href="#">interactive-area-1</a></li>
                <li className="item"><a href="#">interactive-area-1</a></li>
                <li className="item"><a href="#">interactive-area-1</a></li>
            </ul>

            <ul className="side-bar-footer">
                <li className="item"><a href="#">footer content line 1</a></li>
                <li className="item"><a href="#">footer content line 2</a></li>
            </ul>
        </div>
  </>

  )
}

export default Sidebar