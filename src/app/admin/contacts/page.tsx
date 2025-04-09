import { Fragment } from "react";

export default function Table() {
    return(
        <Fragment>
            <div className="card">
                <div className="card-header">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title">Add Row</h4>
                        <button className="btn btn-outline-primary ms-auto">
                            <i className="fa fa-download me-1"></i>
                            Export
                           </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div id="add-row_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="add-row_length">
                                        <label>Show 
                                            <select name="add-row_length" aria-controls="add-row" className="form-control form-control-sm">
                                                <option value="10">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select> entries
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div id="add-row_filter" className="dataTables_filter">
                                        <label>
                                            Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="add-row"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <table id="add-row" className="display table table-striped table-hover dataTable" role="grid" aria-describedby="add-row_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="add-row" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Name: activate to sort column descending">Name</th>
                                                <th className="sorting"tabIndex={0} aria-controls="add-row" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending">Position</th>
                                                <th className="sorting" tabIndex={0} aria-controls="add-row" rowSpan={1} colSpan={1} aria-label="Office: activate to sort column ascending" >Office</th>
                                                <th className="sorting" tabIndex={0} aria-controls="add-row" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending">Action</th></tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th rowSpan={1} colSpan={1}>Name</th>
                                                <th rowSpan={1} colSpan={1}>Position</th>
                                                <th rowSpan={1} colSpan={1}>Office</th>
                                                <th rowSpan={1} colSpan={1}>Action</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">Airi Satou</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>
                                                    <div className="form-button-action">
                                                        <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-danger" data-original-title="Remove">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>
                                                    <div className="form-button-action">
                                                        <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                        <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-danger" data-original-title="Remove">
                                                        <i className="fa fa-times"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">Brielle Williamson</td>
                                                <td>Integration Specialist</td>
                                                <td>New York</td>
                                                <td>
                                                    <div className="form-button-action">
                                                        <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-danger" data-original-title="Remove">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="even">
                                                <td className="sorting_1">Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>
                                                <div className="form-button-action">
                                                    <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-danger" data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr role="row" className="odd">
                                                <td className="sorting_1">Colleen Hurst</td>
                                                <td>Javascript Developer</td>
                                                <td>San Francisco</td>
                                                <td>
                                                <div className="form-button-action">
                                                    <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-primary btn-lg" data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" data-bs-toggle="tooltip" title="" className="btn btn-link btn-danger" data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="add-row_info" role="status" aria-live="polite">Showing 1 to 5 of 10 entries</div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="add-row_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="add-row_previous">
                                                <a href="#" aria-controls="add-row" data-dt-idx="0" tabIndex={0} className="page-link">Previous</a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="add-row" data-dt-idx="1" tabIndex={0} className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="add-row" data-dt-idx="2" tabIndex={0} className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="add-row_next">
                                                <a href="#" aria-controls="add-row" data-dt-idx="3" tabIndex={0} className="page-link">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}