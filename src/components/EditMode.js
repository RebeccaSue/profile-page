import './EditMode.css';
import { SketchPicker } from 'react-color';

function EditMode() {

    let firstName = 'John';
    let lastName = 'Doe'; 


    let birthday = new Date();
    let birthdayYear = birthday.getFullYear();
    let birthdayMonth = String(birthday.getMonth() + 1).padStart(2, '0');
    let birthdayDay = String(birthday.getDate()).padStart(2, '0');
    birthday = birthdayMonth  + '/' + birthdayDay + '/' + birthdayYear;


    var today = new Date();
    var todayDay = String(today.getDate()).padStart(2, '0');
    var todayMonth = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var todayYear = today.getFullYear();

    today = todayMonth + '/' + todayDay + '/' + todayYear;



    return (
    <div className="profile">

        <div className="profile__name">
            <div id="name">
                Name: {firstName} {lastName}
            </div>
        </div>

        <div className="profile__birthday">
            <div id="birthday">
                Birthday: {birthday}
            </div>
        </div>

        <div className="profile__favourite-colour">
            <div id="favourite-colour">
            Favourite Colour 
            <SketchPicker />
            </div>
        </div>

        <div className="profile__edit-button">
            <div id="edit-button">
                Edit
            </div>
        </div>
    </div>)
}



export default EditMode;