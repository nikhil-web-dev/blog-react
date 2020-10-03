import React from 'react'
import {Link} from 'react-router-dom'

class Myblogs extends React.Component{
    render(){
        const loop = [1, 2, 3, 4, 5, 6]

        return(
            <section className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 class="text-light">Published Blogs</h2>
                    </div>
               
                {loop.map((index) =>
                    <div class="col-md-4 mt-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Blog title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Time/date</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">View</a>
                                <a href="#" class="card-link">Delete</a>
                            </div>
                        </div>
                    </div>

                )}

                    <div className="col-md-12 mt-4">
                        <hr />
                        <h2 class="text-light">Saved Blogs</h2>
                    </div>
               
                {loop.map((index) =>
                    <div class="col-md-4 mt-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Blog title</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Time/date</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="card-link">View</a>
                                <a href="#" class="card-link">Publish</a>
                                <a href="#" class="card-link">Delete</a>
                            </div>
                        </div>
                    </div>

                )}

                </div>
                
            </section>
        )
    }
}
export default Myblogs