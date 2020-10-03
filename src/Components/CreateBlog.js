import React from 'react';
import {Link} from 'react-router-dom'

class CreateBlog extends React.Component {
    render(){
        return(
            <section className="container text-light">
                <h2>Create Blog</h2>
                 <div className="card mt-4 bg-dark">
                    <form className="createForm mt-3">

                        <div className="form-group mb-4">
                            <input type="text" className="form-control" id="blog_title" placeholder="Blog Title" />
                        </div>

                        <div className="custom-file mb-4">
                            <input type="file" className="custom-file-input" id="image" />
                            <label className="custom-file-label" for="image">Image</label>
                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                        </div>

                       
                        
                        <div className="form-group form-inline mb-4">
                            <div className="mr-3">
                                <p className="form-check-label text-muted" for="blog_category">Category:</p>
                            </div>
                            <div  className="mr-3">
                                <select className="form-control" id="blog_category">
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option> create category</option>
                                </select>
                            </div>

                            <div>
                                <input type="text" className="form-control" id="category" placeholder="category" />
                            </div>
                        </div>
                        
                        <div className="form-group mb-4 mt-2">
                            <textarea className="form-control" placeholder="Blog Text" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-group mb-3">
                            <div className="form-check form-check-inline">
                                <p className="form-check-label text-muted">Status:</p>
                            </div>
                        
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" id="public" value="public"  name="blog_status"/>
                                <label className="form-check-label" for="public">Public</label>
                            </div>
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" id="private" value="private"  name="blog_status"/>
                                <label className="form-check-label" for="private">Private</label>
                            </div>
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" id="forLoggedUsers" value="forLoggedUsers"  name="blog_status"/>
                                <label className="form-check-label" for="forLoggedUsers">Logged users</label>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <div className="form-check form-check-inline">
                                <p className="form-check-label text-muted">Blog Type:</p>
                            </div>
                        
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" id="one_line" value="one_line"  name="blog_type"/>
                                <label className="form-check-label" for="one_line">One line / Thought</label>
                            </div>
                            <div className="form-check form-check-inline mb-3">
                                <input className="form-check-input" type="radio" id="info_blog" value="info_blog"  name="blog_type"/>
                                <label className="form-check-label" for="info_blog">Info Based</label>
                            </div>
                        </div>

                        <div className="float-right">
                            <button className="btn btn-info m-2">Save</button>
                            <button className="btn btn-success m-2">Publish</button>
                        </div>
                        
                    </form>

                </div>
            </section>
        )
    }
}

export default CreateBlog;

