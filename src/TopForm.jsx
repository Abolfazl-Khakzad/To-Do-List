import React from 'react';


const TopForm = () => {
    return ( 
        <>
            <h4 className="text-center my-3 text-info">To Do List</h4>
                    <form>
                      <div className="d-flex">
                        <input type="text" className="form-control" placeholder="next plan!!"/>
                        <button type="submit" className="btn btn-success ms-1">Go</button>
                      </div>
                    </form>
        </>
     );
}
 
export default TopForm;