import React from 'react';
import Clock from './components/Clock';
import Timer from './components/Timer';
import Button from './components/Button';
import Posts from './components/Posts';
import Users from './components/Users';
import Comments from './components/Comments';
import Photos from './components/Photos';
import Albums from './components/Albums';


function App() {
  return (
    <div className="container-fluid">
      <div className="row" >
          <div className="col-2" ></div>  
          <div className="col-8" >
              {/* <Clock />
              <br />
              <Timer />
              <br />
              <Button />*/} 
              {/* <Posts /> */}
              {/* <Users /> */}
          </div>  
          <div className="col-2" ></div>  
      </div>
      {/* Comments Section */}
      <div className="row" >
          <div className="col-2" ></div>  
          <div className="col-8" >
              {/* <Comments /> */}
          </div>  
          <div className="col-2" ></div>  
      </div>
      {/* Photos Section */}
      <div className="row" >
          <div className="col-2" ></div>  
          <div className="col-8" >
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <Photos /> */}
                </tbody>
              </table>
          </div>  
          <div className="col-2" ></div>  
      </div>
      {/* Albums Section */}
      <div className="row" >
          <div className="col-2" ></div>  
          <div className="col-8" >
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  <Albums />
                </tbody>
              </table>
          </div>  
          <div className="col-2" ></div>  
      </div>
    </div>
  );
}

export default App;
