import {ErrorMessage} from "@hookform/error-message";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const ScheduleDetailsForm = ({schId}) => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    async function ModalSubmit(modal) {
        // console.log(schId)
        // console.log(modal.teamB)

        if(modal.teamA === modal.teamB) {
            Qual.warningdb("BOTH TEAMS CANNOT BE SAME");
            return false;
        }

        modal['schedule'] = schId;
        //modal['sch_status'] =Status;

        let token = localStorage.getItem("orgToken");
        if (!token) {
            console.log("Unverified");
            navigate("/orglogin");
        } else {
            modal['token'] = token;
            const url = "http://localhost:5000/match";

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(modal)
            })
            response = await response.json()
            //console.log(response)
            if (response.error != "") {
                alert(response.error);
            } else {
                reset();
                Qual.successdb("Match Added.");
                // fetchSchedule();
            }
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(ModalSubmit)}>
                <div>
                    <label>TEAM A:</label>
                    <select className="form-control"
                            name="teamA" {...register("teamA", {required: "This field is required"})}>
                        <option value="1">computer science</option>
                        <option value="4">business management</option>
                        <option value="3">physical education</option>
                        <option value="2">commerce</option>
                    </select><br/>
                    <ErrorMessage name="teamA" errors={errors}
                                  render={({message}) => <p className="error-msg">{message}</p>}/>
                </div>

                <div>
                    <label>
                        TEAM B:
                    </label>
                    <select className="form-control"
                            name="teamB" {...register("teamB", {required: "This field is required"})}>
                        <option value="1">computer science</option>
                        <option value="4">business management</option>
                        <option value="3">physical education</option>
                        <option value="2">commerce</option>
                    </select><br/>
                    <ErrorMessage name="teamB" errors={errors}
                                  render={({message}) => <p className="error-msg">{message}</p>}/>
                </div>

                <div>
                    <label>
                        TIME:
                    </label>
                    <input
                        className="form-control mb-2" {...register('time', {required: "This field is required"})}
                        type="time"/><br/>
                    <ErrorMessage name="time" errors={errors}
                                  render={({message}) => <p className="error-msg">{message}</p>}/>
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default ScheduleDetailsForm