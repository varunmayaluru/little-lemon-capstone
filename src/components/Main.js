import React from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import Header from "./Header";
import ConfirmedBooking from "./ConfirmedBooking";
import Booking from "./Booking";


const Main = () => {

    const seedRandom = function(seed){
        var m = 2**25-21;
        var a = 6364136223846793005;
        var s = seed % m;
        return function(){
            s = (a * s) % m;
            return s / m;
        }

    }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++){
            if (random() < 0.5){
                result.push(`${i}:00`);
        }
        if (random() > 0.5){
            result.push(`${i}:30`);
        }
    }
    return result;
}

    const submitAPI = function(formData){
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = React.useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())};
    }

    const navigate = useNavigate();

    function submitForm(formData){
        if(submitAPI(formData)){
            navigate('/confirmed');
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ConfirmedBooking />}/>
            </Routes>
        </main>
    )
}

export default Main;