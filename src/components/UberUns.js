import React from 'react';

const UberUns = () => (
    <div>
        <section class="foto-uberuns contenedor">
        </section>
        <section class="section contenedor intro">
            <p class="subtitulo">
                Team
            </p>
            <p>Wir sind für Sie da</p>

            <div class="contendor-team">
                <div class="profile">
                    <picture>
                        <source srcset="/img/michael-carlson.jpg" type="image/webp" />
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
                        <source srcset="/img/christian-schaller.jpg" type="image/webp" />
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
    </div>
);

export default UberUns;
