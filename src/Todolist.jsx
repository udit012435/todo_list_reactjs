import React, { useState } from "react";
// import React, from {useState}

export const Todolist = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData((listData) => {
      const updateList = [...listData, activity]
      // console.log(updateList);
      setActivity('');
      return updateList
    })
  }
  function editActivity(index) {
    const newActivity = window.prompt("Edit activity:", listData[index]);
    if (newActivity !== null && newActivity.trim() !== "") {
      const updatedList = listData.map((item, i) =>
        i === index ? newActivity : item
      );
      setlistData(updatedList); // Corrected from setListData to setlistData
    }
  }
  function removeActivity(i) {
    const updateListData = listData.filter((elem, id) => {
      return i != id
    })
    setlistData(updateListData)
  }
  function removeAll(){
    setlistData([])
  }
  return (
    <>
      <div className="container">
        <div className="card shadow mt-5">
          <div className="card-body " style={{backgroundColor:"#87CEEB"}}>
            <div className="card-title text-center">
              <h1>To Do List</h1>
            </div>
            <div className="card-text text-center">
              <input type="text" className="py-1 px-2" placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
              <button className="btn btn-success m-2 px-4 py-1" style={{fontSize:'1rem'}} onClick={addActivity}>Add</button>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title m-3">
                  <h3>Here is your list</h3>
                </div>
                <div className="card-text ">
                  {listData != [] && listData.map((data, i) => {
                    return (
                      <>
                        <p key={i}>
                          <div className="card-text m-3 py-1" style={{ backgroundColor:'#D3D3D3'}}>
                            <div className="row">
                              <div className="col-md-8 px-4" style={{fontSize:'1.3rem'}}>{data}</div>
                              <div className="col-md-4 text-end">
                              <button className="btn btn-warning px-2 py-2 mx-1"style={{fontSize: "0.8rem",borderRadius: "0px",}}onClick={() => editActivity(i)}>Edit</button>
                                <button className="btn btn-danger px-2 py-2 mx-1" style={{ fontSize: ' 0.8rem', borderRadius:'0px'}} onClick={() => removeActivity(i)}>Remove</button>
                              </div>
                            </div>
                          </div>
                        </p>
                      </>
                    )
                  })}
                  <div className="card-text text-center">
                    {listData.length >= 1 && <button className="btn btn-primary px-4 py-1"style={{ fontSize: ' 0.8rem'}} onClick={removeAll}>Clear All</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};