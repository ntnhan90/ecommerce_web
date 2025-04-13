import { Fragment } from "react";

export default function Dishes() {
    return(
        <Fragment>
            <div className="card">
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title"></h4>
                        <button className="btn btn-primary ms-auto">
                            <i className="fa fa-plus me-1"></i>
                            Create
                        </button>
                        <button className="btn btn-outline-primary ms-3">
                            <i className="fas fa-sync-alt me-1"></i>
                            Reload
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}