import React, { useState } from 'react';
import ContactInput from './ContactInput';
import Contact from './Contact';

const ContactList = () => {

    const [ contacts, setContacts ] = useState([]);

    const createContact = (user) => {
        const usersTemp = [...contacts];
        usersTemp.unshift(user);
        setContacts(usersTemp);
    }

    const deleteContact = (user) => {
        const index = contacts.indexOf(user);
        const usersTemp = [...contacts];
        usersTemp.splice(index, 1);
        setContacts(usersTemp);
    }

    const contactConnection = (user) => {
        const index = contacts.indexOf(user);
        const usersTemp = [...contacts];
        usersTemp[index].online = !usersTemp[index].online;
        setContacts(usersTemp);
    }

    return(
        <>
            <ContactInput create={createContact}></ContactInput>
            {
                contacts.map((contact, index) => {
                    return(
                        <Contact 
                            key={index}
                            user={contact}
                            name={contact.name} 
                            online={contact.online}
                            remove={deleteContact}
                            connected={contactConnection}
                        />
                    )
                })
            }
        </>
    )
}

export default ContactList;
