import TaskItems from "./TaskItems";
import TopForm from "./TopForm";

function App() {
  return (
            <div className="container w-100 h-100">
                <div className="row justify-content-center">
                  <div className="col-12 bg-light m-3 rounded ">
                    <TopForm/>
                    <TaskItems/>
                  </div>
                </div>
            </div>
  );
}

export default App;
