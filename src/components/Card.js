import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="row m-4 text-center">
                <div className="col-md-4">
                    <div className="card m-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">React Class 1</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">20 June 2023</h6>
                            <p className="card-text">
                                installed React and learnt React Basics - Index.html, index.js, Components, etc.
                            </p>
                            <a href="#" className="card-link">Go Here</a>
                            <a href="#" className="card-link">Go There</a>
                        </div>
                    </div>

                    <div className="card m-4" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">React Class 2</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">21 June 2023</h6>
                            <p className="card-text">
                                Learnt about styling and ...
                            </p>
                            <a href="#" className="card-link">Go Here</a>
                            <a href="#" className="card-link">Go There</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
