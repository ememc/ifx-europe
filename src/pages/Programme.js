import React from 'react';
import { Link } from 'react-router-dom';

const Programme = () => (
    <div>
        <section class="foto-programme contenedor"></section>
        <section class="section contenedor intro">
            <p class="subtitulo">
                Programme
            </p>
            <p>Andere Länder und Kulturen kennen lernen</p>

            <div class="contendor-program">

                <p>Wir von IFX Europe organisieren, in Zusammenarbeit mit unseren Partnern, Studentenaustausch-Programme, Schüleraustausch- Programme, Team- Touren und Jugend- Camps.</p>
                <p>In</p>
                <ul>
                    <li>Deutschland</li>
                    <li>Spanien</li>
                    <li>England</li>
                    <li>Italien</li>
                    <li>USA</li>
                </ul>
                 <Link to="/bewerbung-als-student" className='boton boton-azul'>Jetzt als Student/Schüler bewerben.</Link>
            </div>
        </section>     
    </div>
);

export default Programme;
