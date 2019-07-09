import React from 'react';
import {  Link } from 'react-router-dom';


const JobCard = ({job}) => {
    const jobItemList = job.jobs.map(data => {
        return (
            <div>
                <label>{data.title}</label>
                <p>{data.type}</p>
                <Link className="btn btn-primary" to={/detail/:data.job-id} > Apply</Link>
                <button >Apply</button>
            </div>
        )
    })

    return (
        <div>
            <h2>{job.job_area}</h2>
            <div>{jobItemList}</div>
        </div>
    );
}
export default JobCard;