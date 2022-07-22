import * as React from 'react'
import MobileNavbar from '../MobileNavbar/MoblieNavbar'
import blogImg from '../../Safari.jpeg'

const Blog = ({onToggle, openSidebar, contentRef}) => {

  return (
    <>
        <div className="content" ref={contentRef}>
            <MobileNavbar onToggle={onToggle} openSidebar={openSidebar}/>

            <ul className="blog">
                <li className="blog-block">
                    <div className="non-image-part">
                        <a href="#">Blog Title 1</a>
                        <p>
                            This is is a short and general introduction of a blog post, 
                            this should normally takes up to two lines of the blog block
                        </p>
                        <p className="time">time published</p>
                    </div>

                    <div className="image-part">
                        <img src={blogImg} />
                    </div>
                </li>
        
                <li className="blog-block">
                    <div className="non-image-part">
                        <a href="#">Blog Title 2</a>
                        <p>
                            This is is a short and general introduction of a blog post, 
                            this should normally takes up to two lines of the blog block
                        </p>
                        <p className="time">time published</p>
                    </div>

                    <div className="image-part">
                        <img src={blogImg} />
                    </div>
                </li>

                <li className="blog-block">
                    <div className="non-image-part">
                        <a href="#">Blog Title 3</a>
                        <p>
                            This is is a short and general introduction of a blog post, 
                            this should normally takes up to two lines of the blog block
                        </p>
                        <p className="time">time published</p>
                    </div>

                    <div className="image-part">
                        <img src={blogImg} />
                    </div>
                </li>

                <li className="blog-block">
                    <div className="non-image-part">
                        <a href="#">Blog Title 4</a>
                        <p>
                            This is is a short and general introduction of a blog post, 
                            this should normally takes up to two lines of the blog block
                        </p>
                        <p className="time">time published</p>
                    </div>

                    <div className="image-part">
                        <img src={blogImg} />
                    </div>
                </li>

                <li className="blog-block">
                    <div className="non-image-part">
                        <a href="#">Blog Title 5</a>
                        <p>
                            This is is a short and general introduction of a blog post, 
                            this should normally takes up to two lines of the blog block
                        </p>
                        <p className="time">time published</p>
                    </div>

                    <div className="image-part">
                        <img src={blogImg} />
                    </div>
                </li>

                <li className="blog-block">
                    <div className="non-image-part">
                        <a href="#">Blog Title 6</a>
                        <p>
                            This is is a short and general introduction of a blog post, 
                            this should normally takes up to two lines of the blog block
                        </p>
                        <p className="time">time published</p>
                    </div>

                    <div className="image-part">
                        <img src={blogImg} />
                    </div>
                </li>

            </ul>
        </div>
    </>

  )
}

export default Blog