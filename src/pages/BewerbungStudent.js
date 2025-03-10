import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const BewerbungStudent = () => (
  <div>
    <section class="contenedor foto-gastfamilie"></section>
    <section class="section contenedor intro">
        <p class="subtitulo">
            Bewerbe dich als Student / Schüler
        </p>
       

        <div class="contendor-program">

            <form class="formulario">
                
                <div class="column-container">
                    <fieldset class="column">

                        <div class="separa">
                            <label for="Anrede" >Anrede *</label>
                        <select name="salutation">
                            <option value="Herr">Herr</option>
                            <option value="Frau">Frau</option>
                        </select>
    
                        </div>
    
                        <div class="separa">
                            <label for="Nachname">Nachname *</label>
                        <input name="lastname" type="text" id="Nachname" />
                        </div>
    
                        <div class="separa">
                            <label for="Vorname">Vorname *</label>
                        <input name="firstname" type="text" id="Vorname" />
                        </div>
    
                        <div class="separa">
                            <label for="Strasse">Strasse *</label>
                        <input name="street" type="text" id="Strasse" />
                        </div>
    
                        <div class="separa">
                            <label for="Hausnummer">Hausnummer *</label>
                        <input name="streetnumber" type="text" id="Hausnummer" />
                        </div>

                        <div class="separa">
                            <label for="Postleitzahl">Postleitzahl</label>
                        <input name="zip" type="text" id="Postleitzahl" />
                        </div>
    
                        <div class="separa">
                            <label for="Stadt">Stadt / Ort *</label>
                        <input name="city" type="text" id="Stadt" />
                        </div>
    
                        <div class="separa">
                            <label for="Bundesland">Bundesland *</label>
                        <input name="country" type="text" id="Bundesland" />
                        </div>
    
                        <div class="separa">
                            <label for="Geburtsdatum">Geburtsdatum *</label>
                        <input name="birthday" type="date" id="Geburtsdatum" />
                        </div>

                        <div class="separa">
                            <label for="Telefon">Telefon *</label>
                        <input name="telephone" type="tel" id="Telefon" />
                        </div>
    
                        <div class="separa">
                            <label for="Mobilnummer">Mobilnummer *</label>
                        <input name="mobil" type="tel" id="Mobilnummer" />
                        </div>
    
                    </fieldset>
    
                    <fieldset class="column">
                        
    
                        <div class="separa">
                            <label for="email">Email Adresse *</label>
                        <input name="email" type="email" id="email" />
                        </div>
    
                        <div class="separa">
                            <label for="Staatsangehörigkeit">Staatsangehörigkeit *</label>
                        <input name="nationality" type="text" id="Staatsangehörigkeit" />
                        </div>
    
                        <div class="separa">
                            
                        <select id="school">
                            <option value="Hauptschule">Hauptschule</option>
                            <option value="Realschule">Realschule</option>
                            <option value="Gymnasium">Gymnasium</option>
                            <option value="Gesamtschule">Gesamtschule</option>
                            <option value="Universität">Universität</option>
                            <option value="Fachhochschule(FH)">Fachhochschule(FH)</option>
                        </select>
                        </div>
    
                        <div class="separa">
                            <label for="class">Welche Klasse/Semester besuchst Du?</label>
                            <input name="class" type="text" id="class" />
                        
                        </div>
    
                        <div class="separa">
                            <label for="studieren">Was möchtest Du studieren?</label>
                        <input name="studium" type="text" id="studieren" />
                        </div>

                        <div class="separa">
                            <label for="languages">Sprachkenntnisse</label>
                        <input name="languages" type="text" id="languages" />
                        </div>

                        <div class="separa">
                            <label for="interesting_country" >Für welches Land interessierst Du dich?</label>
                        <select name="interesting_country">
                            <option value="England">England</option>
                            <option value="Italien">Italien</option>
                            <option value="Spanien">Spanien</option>
                            <option value="USA">USA</option>
                            <option value="Deutschland">Deutschland</option>
                        </select>
    
                        </div>

                        <div class="separa">
                            <label for="programm" >Für welches Programm interessierst Du dich?</label>
                        <select name="programm">
                            <option value="Studentenaustausch-Programme">Studentenaustausch-Programme</option>
                            <option value="Schüleraustausch- Programme">Schüleraustausch- Programme</option>
                            <option value="Team- Touren">Team- Touren</option>
                            <option value="Jugend- Camp">Jugend- Camp</option>
                            
                        </select>
    
                        </div>

                        <div class="separa">
                            <label for="sportart">Welche Sportart betreibst Du?</label>
                        <input name="sportart" type="text" id="sportart" />
                        </div>
    
                        <div class="separa">
                            <label for="message">Nachricht</label>
                        <textarea name="message" rows="5" id="message">
                        </textarea>
                        </div>
    
                        <div class="separa">
                            <p>Datenschutz gelesen und akzeptiert </p>
                            
                            <div class="acepta">
                                <label for="acepta">Ja, ich stimme zu</label>
                                <input name="datenschutz" type="radio" value="Ja, ich stimme zu" id="acepta" />
    
                                <label for="no-acepta">Ich stimme nicht zu</label>
                                <input name="datenschutz" type="radio" value="Ich stimme nicht zu" id="no-acepta" />
    
                            </div>
                        </div>
    
                    </fieldset>
                </div>

                <input class="boton-azul" value="Anfrage senden" type="submit" />

            </form>

            

        </div>

    </section>
  </div> 
);

export default BewerbungStudent;
