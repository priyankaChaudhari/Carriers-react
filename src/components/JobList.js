import React from 'react';

import JobListApi from '../api/JobListApi';
import Spinner from './Spinner';
import JobCard from './JobCard';

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
                    return <JobCard key={job.id} job={job} ></JobCard>
                });
                return <div className="ui relaxed divided list">{renderedList}</div>;
            }

    }
}

export default JobList;