import React from 'react';

import JobListApi from '../api/JobListApi';
import Spinner from './Spinner';
import JobCard from './JobCard';
import "../css/App.css";

class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {jobList : null};
    }
    componentDidMount() {
        this.onSearch();
    }
    onSearch = async () => {
        this.setState({jobList: await JobListApi.get('joblist')})
        //const this.state.jobList = await JobListApi.get('joblist');
        console.log(this.state.jobList,"!!!!!!!!!!11");
    }
    render() {
        console.log(this.state.jobList,"render")
        if (!this.state.jobList) {
            return <Spinner></Spinner>
            } else {
                const renderedList = this.state.jobList.data.map(job => {
                    return (
                        <div className="container pt-5 mt-5">
                            <JobCard key={job.id} job={job} ></JobCard>
                        </div>  

                    )
                });
                return <div >{renderedList}</div>;
            }

    }
}

export default JobList;