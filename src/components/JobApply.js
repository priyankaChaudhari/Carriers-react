import React from 'react';

class JobApply extends React.Component {

    render(){
        return (
            <div className="mt-5 pt-1 white-panel">
                <div className="container mt-3">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="form-outer mb-5">

                                <h3 className="detail-sub-title pb-3">SUBMIT YOUR APPLICATION:</h3>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="fullname" className="form-control" placeholder="Full name" required="" autofocus="" />
                                    <label for="fullname">Full name</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="email" className="form-control" placeholder="Email" required="" />
                                    <label for="email">Email</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="phone" className="form-control" placeholder="Phone" required="" />
                                    <label for="phone">Phone</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="current-company" className="form-control" placeholder="Current company" required="" />
                                    <label for="current-company">Current company</label>
                                </div>

                                <h3 className="detail-sub-title pb-2 pt-4">LINKS</h3>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="quora" className="form-control" placeholder="Quora" required="" />
                                    <label for="quora">Quora</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="LinkedInURL" className="form-control" placeholder="LinkedIn URL" required="" />
                                    <label for="LinkedInURL">LinkedIn URL</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="TwitterURL" className="form-control" placeholder="Twitter URL" required="" />
                                    <label for="TwitterURL">Twitter URL</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="GithubURL" className="form-control" placeholder="Github URL" required="" />
                                    <label for="GithubURL">Github URL</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="PortfolioURL" className="form-control" placeholder="Portfolio URL" required="" />
                                    <label for="PortfolioURL">Portfolio URL</label>
                                </div>
                                <div className="form-label-group mb-4">
                                    <input type="text" id="Otherwebsite" className="form-control" placeholder="Other website" required="" />
                                    <label for="Otherwebsite">Other website</label>
                                </div>

                                <h3 className="detail-sub-title pb-2 pt-3">WORK AUTHORIZATION</h3>
                                <div className="mb-3">
                                    <div className="pb-2">
                                        Are you legally authorized to work in the United States?
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="yes1" name="yes1" className="custom-control-input" />
                                        <label className="custom-control-label" for="yes1">Yes</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="no1" name="yes1" className="custom-control-input" />
                                        <label className="custom-control-label" for="no1">No</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="pb-2">
                                        Will you now or in the future require sponsorship for employment visa status (e.g., H-1B)?
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="yes2" name="yes2" className="custom-control-input" />
                                        <label className="custom-control-label" for="yes2">Yes</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="no2" name="yes2" className="custom-control-input" />
                                        <label className="custom-control-label" for="no2">No</label>
                                    </div>
                                </div>


                                <h3 className="detail-sub-title pb-2 pt-3">ADDITIONAL INFORMATION</h3>
                                <div className="form-label-group">
                                    <textarea id="moreinfo" className="form-control" placeholder="Add a cover letter or anything else you want to share."> </textarea>
                                    <label for="moreinfo">Add a cover letter or anything else you want to share.</label>
                                </div>

                                <div className="text-center pt-3 pb-3">
                                    <button className="btn btn-primary">Submit application</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default JobApply;