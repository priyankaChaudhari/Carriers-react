import React from 'react';
import api from '../api/JobListApi';
//import { Link } from 'react-router-dom';
import "../css/App.css";
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

class JobDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { jobDetail: null};
    }

    componentDidMount(props) {
        this.getJobDetail();
        console.log(this.state,"!!!!!!!!!!!!!!!")
    }

    getJobDetail = async () => {
        this.setState({jobDetail: await api.get('detail/1')});
    }

    render() {
            const jobDetailPage = '';
            const responsibilities = '';
            console.log(this.state,this.props);
            if (this.state.jobDetail) {
                const details = JSON.parse(JSON.stringify(this.state['jobDetail']['data']));
              console.log(details, typeof (details));
                console.log( JSON.parse(JSON.stringify(this.state['jobDetail']['data'])));
                    this.jobDetailPage =  (
                    <div className="white-panel mt-5 pt-1">
                        <div className="container pt-5 mt-5 pb-1">
                            <div className="row justify-content-between mb-4 pb-2">
                                <div className="col">
                                    <h4 className="page-title">{details['job-title']}</h4>
                                    <div className="posting-categories">
                                        <span className="badge badge-secondary">{details['job-location']}</span>
                                        <span className="badge badge-secondary">{details['job-area']}</span>
                                        <div className="pt-3">{details['description']}</div>
                                    </div>
                                </div>
                                <div className="col- pt-5">
                                    <Link className="btn btn-primary" to="/apply/" > Apply for this job</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                    const responsility = details['responsibilities'].map(res => {
                            return (
                                <li>{res}</li>
                            );
                        });
                    const requirement = details['requirements'].map(req=>{
                      return (<li>{req}</li>);
                    });
                    this.responsibilities = (
                        <div className="container mt-5">
                            <div className="row mb-3">
                                <div className="col-12">
                                    <h3 className="detail-sub-title">Responsibilities:</h3>
                                    <ul className="pl-3">
                                        {responsility}
                                    </ul>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <h3 className="detail-sub-title">Requirements:</h3>
                                    <ul className="pl-3">
                                       {requirement}
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-3">
                                {details['info']}
                            </div>
                            <div className="text-center mb-5 mt-5">
                                <Link className="btn btn-primary" to="/apply/" > Apply for this job</Link>
                            </div>
                        </div>
                    );



            }
            if (this.state.jobDetail) {
                return (
                    <div>{this.jobDetailPage}
                    <div>
                        {this.responsibilities}
                    </div>
                    </div>

                );
            }
            else {
              return (
                <div className="white-panel mt-5 container">
                  <Spinner message="Loading job Details"></Spinner>
                  </div>
              );
            }
    }

}

export default JobDetail;
