import React from 'react';

import JobList from './JobList';
import JobDetail from './JobDetail';
import { BrowserRouter, Route } from 'react-router-dom';
import "../css/App.css"

class App extends React.Component {

    render() {
        return (
            <div>                                                                                                                                                                                         
              <BrowserRouter>                                                                                                                                                                           
                                                                                                                                                                                                        
          <div>                                                                                                                                                                                         
              <header className="main-header">                                                                                                                                                          
                  <div className="logo">                                                                                                                                                                
                      <img alt="logo" src="Constants/Images/amazatic-logo.png"  />                                                                                                                      
                      <label className="header-title"> Job Portal</label>                                                                                                                               
                  </div>                                                                                                                                                                                
              </header>                                                                                                                                                                                 
          </div>                                                                                                                                                                                        
          <div>                                                                                                                                                                                         
                  <div>                                                                                                                                                                                 
                      <Route path="/" exact component={JobList} />
                      <Route path="/detail" component={JobDetail} />                                                                                                                                    
                                                                                                                                                                                                        
                  </div>                                                                                                                                                                                
          </div>                                                                                                                                                                                        
          <div>                                                                                                                                                                                         
              <footer className="main-footer text-center">                                                                                                                                              
                  Copyright &copy; Amazatic 2019                                                                                                                                                        
              </footer>                                                                                                                                                                                 
          </div>                                                                                                                                                                                        
          </BrowserRouter>                                                                                                                                                                              
                                                                                                                                                                                                        
          </div>                            
        )
    }
}

export default App;