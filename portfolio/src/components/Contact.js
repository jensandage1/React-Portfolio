import ContactForm from "./ContactForm";
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Contact.css";


export default function Contact(){
    return (
        <div className="contact">
            <ContactForm />
        </div>
    );
}

//add contact form that had fields for name email (with validation and error if invalid) and a message
//form will say all fields are required. 