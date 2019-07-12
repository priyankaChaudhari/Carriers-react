import React from 'react';
import {  Link } from 'react-router-dom';
import "../css/App.css";


const JobCard = ({job}) => {
    console.log(job,"jobbbbbbb")
    const jobItemList = job.jobs.map(data => {
        return (
            <div className="row justify-content-between mb-4 pb-2">
                <div className="col-">
                    <h4 className="mb-1">{data.title}</h4>
                    <div className="posting-categories">
                        <span className="badge badge-secondary">{data.type}</span>
                    </div>
                </div>
                <div className="col-">
                    <Link className="btn btn-primary" to="/detail/" > Apply</Link>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="row mt-5">
                <div className="col-12">
                    <h2>{job.job_area}</h2>
                </div>
            </div>
            <div className="pl-3 pr-3 mt-3">{jobItemList}</div>
        </div>
    );
}
export default JobCard;
