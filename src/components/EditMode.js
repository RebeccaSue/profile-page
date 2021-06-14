import './EditMode.css';
import DatePicker from "react-datepicker";
import { ChromePicker } from 'react-color';
import { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";

function EditMode({onSubmit}) {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birthday, setBirthday] = useState(new Date());



    const clickHandler = e => {
        onSubmit(lastname);
    }

    return (
    <div className="profile">

        
        <div id="name">
            <p>Name</p>
            <input 
                type="text"
                name="firstname"
                id="firstname-input"
                placeholder="First Name"
                value={firstname}
                onChange={e => setFirstname(e.target.value)}
            />
            <input 
                type="text"
                name="lastname"
                id="lastname-input"
                placeholder="Last Name"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
            />
        </div>
        <br/>
        <div id="birthday">
            <p>Birthday</p>
            <DatePicker 
                id="birthday-date"
                selected={birthday} 
                onChange={ (date)=>setBirthday(date) }/>
        </div>
        <br/>
        <div id="favourite-colour">
            <p>Favourite Colour</p>
            <ChromePicker 
                id="colour-picker"/>
        </div>
        <br/>
        <button
            id="edit-button" 
            onClick={clickHandler}
        > Edit </button>
    </div>)
}



export default EditMode;