import React from 'react';

const Home = () => 
(
<div>
    <div class="slider-box">
        <ul>
            <li>
                <img src="/img/slider1.jpg" alt="slider1" />
            </li>
            <li>
                <img src="/img/slider2.jpg" alt="slider2" />
            </li>
            <li>
                <img src="/img/slider3.jpg" alt="slider3" />
            </li>
        </ul>
    </div>   
    <main class="contenedor seccion intro">
        <h1>Herzlich Willkommen bei IFX</h1>
        <p class="subtitulo">Studium und Schüleraustausch im Ausland</p>
        <p>Ein Auslandsaufenthalt mit IFX Europe ist eine gute Möglichkeit, die akademische Ausbildung, das Kennenlernen fremder Kulturen, sowie die Persönlichkeitsentfaltung weiter voranzutreiben. Mit diesen Kenntnissen erweiterst Du Deinen Horizont, stärkst Deine Sozialkompetenz und verbesserst Deine Karrierechancen.</p>
    </main>

    <div class="contenedor-foto">
        <section class="contenedor seccion foto-secundaria">

        </section>
    </div>

    <section class="section contenedor intro">
        <p class="subtitulo">
            Team
        </p>
        <p>Wir sind für Sie da</p>

        <div class="contendor-team">
            <div class="profile">
                <picture>
                    <source srcset="/img/michael-carlson.jpg" type="image/jpg" />
                    <source srcset="/img/michael-carlson.jpg" type="image/jpeg" />
                    <img loading="lazy" src="/img/michael-carlson.jpg" alt="michael-carlson" />
                </picture>
                
                <div class="contenido-profile">
                    <h3>Michael Carlson</h3>
                <p class="cargo">Owner/Inhaber</p>
                <p>Studium Universität Colorado in "International Affairs"</p>
                <p>Als ehemaliger Experte im Bankwesen bringt er unter anderem seine Expertise in den Bereichen Verkauf, Marketing und Finanzen ein.</p>

                </div>

            </div>

            <div class="profile">
                <picture>
                    <source srcset="/img/christian-schaller.jpg" type="image/jpg" />
                    <source srcset="/img/christian-schaller.jpg" type="image/jpeg" />
                    <img src="/img/christian-schaller.jpg" alt="christian-schaller" />
                </picture>
                <div class="contenido-profile">
                    <h3>Christian Schaller</h3>
                <p class="cargo">General Assistant Manager</p>
                <p>Studium Universität Würzburg in "Business Management"</p>
                <p>Zu seinen Hauptaufgabengebieten zählt unter anderem die Beratung, Marketing und Business Development.</p>

                </div>

            </div>

        </div>

    </section>

    <div class="contenedor-foto">
        <section class="contenedor seccion tercera-foto">

        </section> 
    </div>

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

            <a href="bewerbung-als-student.html" class="boton boton-azul">Jetzt als Student/Schüler bewerben.</a>

        </div>

    </section>

    <div class="contenedor-foto">
        <section class="contenedor seccion cuarta-foto">

        </section> 
    </div>

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

            <a href="bewerbung-als-gastfamilie.html" class="boton boton-azul">Jetzt als Gastfamilie bewerben.</a>

        </div>

    </section> 

    <div class="contenedor-foto">
        <section class="contenedor seccion quinta-foto">

        </section> 
    </div>

    <section class="section contenedor intro">
        <p class="subtitulo">
            Leistungen
        </p>
        <p>Rundum-Betreuung durch IFX-Europe</p>

        <div class="contendor-program">

            <p>Unsere umfassenden Leistungen und Betreuung beinhalten:</p>
            <ul>
                <li>Bildung - Zusammenarbeit mit zertifizierten Bildungseinrichtungen</li>
                <li>Integration - Integration über sportliche & kulturelle Aktivitäten</li>
                <li>Verwaltung - Unterstützung bei behördlichen & visarechtlichen Themen</li>
                <li>Wohnen - Bereitstellung von Wohnmöglichkeiten</li>
                <li>Beratung - Mentoring während der Programmteilnahme zur persönlichen und akademischen Weiterentwicklung</li>
            </ul>

        </div>

    </section>   
</div>
);

export default Home;
