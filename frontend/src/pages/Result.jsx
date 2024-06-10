import {useEffect, useState} from "react";

function Result(){
    const [task, setTask] = useState([]);

    async function Result() {
        const url = "http://localhost:5000/result";
        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        if (response.error != "") {
            alert(response.error)
        } else {
            setTask(response.records)
        }
    }

    useEffect(() => {
        Result()
    }, [])

    return(
        <>
            <div className="container">
                <div className="rts-gallery-section pt-1">
                    <div className="container">
                        <div className="top-wrap">
                            <div className="filter-button-group">
                                <h2 style={{fontSize:42}}>RESULTS </h2>
                            </div>
                        </div>
                        <div className="filterd-items fifa20">
                            <div className="gallery-grid">
                                <div className="row mt-2 mb-2">


                                    {task.length == 0 ? <div>
                                            <h4>No Data Available</h4></div> :
                                        task.map((value, index) =>
                                            <div className="col-xl-4 col-md-4 col-sm-4 col-12 mb-2" key={index}>
                                                <div className="card text-center">
                                                    <div className="card-header " style={{backgroundColor:'black'}}>
                                                        <h2 style={{color:'steelblue'}} >  {value.teamAName}</h2>
                                                        <h2 style={{color:'gold'}}>V/S</h2>
                                                        <h2 style={{color:'steelblue'}} > {value.teamBName}</h2>
                                                    </div>
                                                    <div className="card-body" style={{backgroundColor:'lightgray'}}>
                                                        <h2 className="card-text">{value.scheduleDate}</h2>
                                                        <h2 className="card-text">{value.game}</h2>
                                                    </div>
                                                    <div className="card-footer " style={{backgroundColor: 'black'}}>
                                                        <h2 style={{color: 'gold'}}>WIN</h2>
                                                        <h2 style={{color: 'steelblue'}}>
                                                            {value.result}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Result;