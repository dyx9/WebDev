import * as React from 'react'
import MobileNavbar from '../MobileNavbar/MoblieNavbar'

const Blog = ({onToggle, openSidebar, contentRef}) => {

  return (
    <>
        <div className="content" ref={contentRef}>
            <MobileNavbar onToggle={onToggle} openSidebar={openSidebar}/>
            <ul className="blog">
                <li className="blog-block">
                    <a href="#">blog title</a>
                    <p>content placeholder.........</p>
                    <p>content placeholder.........</p>
                </li>
        
                <li className="blog-block">
                    <a href="#">blog title</a>
                    <p>content placeholder.........</p>
                    <p>content placeholder.........</p>
                </li>
        
                <li className="blog-block">
                    <a href="#">blog title</a>
                    <p>content placeholder.........</p>
                    <p>content placeholder.........</p>
                </li>
        
                <li className="blog-block">
                    <a href="#">blog title</a>
                    <p>content placeholder.........</p>
                    <p>content placeholder.........</p>
                </li>
        
                <li className="blog-block">
                    <a href="#">blog title</a>
                    <p>content placeholder.........</p>
                    <p>content placeholder.........</p>
                </li>
            </ul>
        </div>
    </>

  )
}

export default Blog