import React from 'react';
import { Link } from 'react-router-dom';


const Gastfamilie = () => (
    <div>
        <section class="contenedor foto-gastfamilie"></section>
        <section class="section contenedor intro">
            <p class="subtitulo">
                Gastfamilie
            </p>
            <p>Wir suchen Sie!</p>

            <div class="contendor-program">

                <p>Im Rahmen unseres Austauschprogramms in Deutschland suchen wir kultur- und sportinteressierte Gastfamilien!</p>
                <p>Sie sind:</p>
                <ul>
                    <li>gastfreundlich?</li>
                    <li>kulturoffen?</li>
                    <li>aktiv und sportbegeistert?</li>
                    
                </ul>
                <p>Dann nehmen Sie mit uns Kontakt auf. Wir suchen ständig Gastfamilien die unseren Schülern und Studenten Ihre Kultur näher bringen und Ihr Gastland toll repräsentieren möchten.</p>

                 <Link to="/bewerbung-als-gastfamilie" className='boton boton-azul'>Jetzt als Gastfamilie bewerben.</Link>

            </div>

        </section>     
    </div>
);

export default Gastfamilie;
