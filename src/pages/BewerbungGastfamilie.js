import React, { useState } from 'react';
import '../index.css';

const initialFormData = {
    salutation: '',
    lastname: '',
    firstname: '',
    street: '',
    streetnumber: '',
    city: '',
    country: '',
    birthday: '',
    telephone: '',
    mobil: '',
    email: '',
    nationality: '',
    contactable: '',
    reference: '',
    gastfamily_where: '',
    message: '',
    datenschutz: ''
  };



const BewerbungGastfamilie = () => { 
    
    const [formData, setFormData] = useState(initialFormData);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };   
      
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        try {
          const response = await fetch('https://api.ifx-europe.de/family', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Formulario enviado exitosamente.');
          } else {
            alert('Error al enviar el formulario.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };      

    return (
    <div>
        
        <section class="contenedor foto-gastfamilie"></section>

        <section class="section contenedor intro">
            <p class="subtitulo">
                Bewerben Sie sich als Gastfamilie
            </p>
        

            <div class="contendor-program">

            <form className="formulario" onSubmit={handleSubmit}>
            <div className="column-container">
                <fieldset className="column">
                <div className="separa">
                    <label>Anrede *</label>
                    <select name="salutation" onChange={handleChange}>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    </select>
                </div>

                <div className="separa">
                    <label>Nachname *</label>
                    <input name="lastname" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Vorname *</label>
                    <input name="firstname" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Strasse *</label>
                    <input name="street" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Hausnummer *</label>
                    <input name="streetnumber" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Stadt / Ort *</label>
                    <input name="city" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Bundesland *</label>
                    <input name="country" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Geburtsdatum *</label>
                    <input name="birthday" type="date" onChange={handleChange} />
                </div>
                </fieldset>

                <fieldset className="column">
                <div className="separa">
                    <label>Telefon *</label>
                    <input name="telephone" type="tel" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Mobilnummer *</label>
                    <input name="mobil" type="tel" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Email Adresse *</label>
                    <input name="email" type="email" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Staatsangehörigkeit *</label>
                    <input name="nationality" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Wann sind Sie am besten zu erreichen? *</label>
                    <select name="contactable" onChange={handleChange}>
                    <option value="Vormittag">Vormittag (9-12)</option>
                    <option value="Nachmittag">Nachmittag (13-17)</option>
                    <option value="Abend">Abend (18-21)</option>
                    </select>
                </div>

                <div className="separa">
                    <label>Wie sind Sie auf uns aufmerksam geworden?</label>
                    <select name="reference" onChange={handleChange}>
                    <option value="Empfehlung">Empfehlung</option>
                    <option value="Internet">Internet</option>
                    <option value="Andere Organisation">Andere Organisation</option>
                    </select>
                </div>

                <div className="separa">
                    <label>Waren Sie bereits Gastfamilie, wenn ja wo?</label>
                    <input name="gastfamily_where" type="text" onChange={handleChange} />
                </div>

                <div className="separa">
                    <label>Nachricht</label>
                    <textarea name="message" rows="5" onChange={handleChange} />
                </div>

                <div className="separa">
                    <p>Datenschutz gelesen und akzeptiert</p>
                    <div className="acepta">
                    <label>
                        <input
                        name="datenschutz"
                        type="radio"
                        value="Ja, ich stimme zu"
                        onChange={handleChange}
                        />
                        Ja, ich stimme zu
                    </label>
                    <label>
                        <input
                        name="datenschutz"
                        type="radio"
                        value="Ich stimme nicht zu"
                        onChange={handleChange}
                        />
                        Ich stimme nicht zu
                    </label>
                    </div>
                </div>
                </fieldset>
            </div>

            <input className="boton-azul" type="submit" value="Anfrage senden" />
            </form>


            </div>

        </section>

    </div>
);
}

export default BewerbungGastfamilie;
