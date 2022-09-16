import React from 'react';


const TaskItems = () => {
    return (
        <>
            <ul className="list-group mt-3">

<li className="list-group-item d-flex justify-content-between rounded">
  first plan
  <span>
  <i class="fa-solid fa-check text-success me-3 pointer"></i>
  <i class="fa-solid fa-x text-warning me-3 pointer"></i>
  <i class="fa-solid fa-trash text-danger pointer"></i>
  </span>
</li>

<li className="list-group-item d-flex justify-content-between mt-2 rounded">
  second plan
  <span>
  <i class="fa-solid fa-check text-success me-3 pointer"></i>
  <i class="fa-solid fa-x text-warning me-3 pointer"></i>
  <i class="fa-solid fa-trash text-danger pointer"></i>
  </span>
</li>

<li className="list-group-item d-flex justify-content-between my-2 rounded">
  third plan
  <span>
  <i class="fa-solid fa-check text-success me-3 pointer"></i>
  <i class="fa-solid fa-x text-warning me-3 pointer"></i>
  <i class="fa-solid fa-trash text-danger pointer"></i>
  </span>
</li>
</ul>
        </>
      );
}
 
export default TaskItems;