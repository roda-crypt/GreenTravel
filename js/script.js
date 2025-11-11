// Variable global para almacenar el mapa actual
let currentMapUrl = '';

// Itinerarios personalizados para cada paquete
const itineraries = {
    itin1: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Llegada a Cusco y aclimatación
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>10:00 AM</strong> – Llegada al aeropuerto de Cusco, recepción y traslado al hotel.<br>
                        <strong>11:00 AM</strong> – Check-in y tiempo libre para aclimatación.<br>
                        <strong>02:00 PM</strong> – Almuerzo tradicional con coca tea.<br>
                        <strong>04:00 PM</strong> – City Tour por Cusco: Plaza de Armas, Catedral, Qorikancha.<br>
                        <strong>06:00 PM</strong> – Visita a Sacsayhuamán y centros ceremoniales.<br>
                        <strong>08:00 PM</strong> – Cena de bienvenida y presentación del trekking.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Inicio del Camino Inca - Wayllabamba
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> – Desayuno en el hotel.<br>
                        <strong>07:00 AM</strong> – Traslado a Km 82, punto de inicio del Camino Inca.<br>
                        <strong>08:30 AM</strong> – Comienzo del trekking, control de pasaportes.<br>
                        <strong>12:30 PM</strong> – Almuerzo en Llactapata con vistas espectaculares.<br>
                        <strong>04:00 PM</strong> – Llegada al campamento de Wayllabamba.<br>
                        <strong>06:00 PM</strong> – Cena y explicación sobre la flora y fauna local.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Paso de la Mujer Muerta - Wiñayhuayna
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> – Desayuno y preparación para el día más desafiante.<br>
                        <strong>07:00 AM</strong> – Ascenso al paso de Warmiwañusca (4,215 msnm).<br>
                        <strong>11:00 AM</strong> – Llegada al punto más alto, ceremonia de agradecimiento.<br>
                        <strong>01:00 PM</strong> – Almuerzo en Pacaymayu.<br>
                        <strong>03:00 PM</strong> – Descenso hacia Wiñayhuayna.<br>
                        <strong>06:00 PM</strong> – Cena y celebración por el logro del día.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Día 4: Inti Punku y Machu Picchu
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>05:00 AM</strong> – Desayuno y inicio de la caminata final.<br>
                        <strong>06:30 AM</strong> – Llegada a Inti Punku (Puerta del Sol).<br>
                        <strong>07:00 AM</strong> – Primera vista de Machu Picchu al amanecer.<br>
                        <strong>09:00 AM</strong> – Tour guiado por Machu Picchu (2 horas).<br>
                        <strong>11:30 AM</strong> – Tiempo libre para exploración personal.<br>
                        <strong>01:00 PM</strong> – Almuerzo en Aguas Calientes.<br>
                        <strong>03:00 PM</strong> – Tren de regreso a Cusco.<br>
                        <strong>07:00 PM</strong> – Cena de despedida en Cusco.
                    </div>
                </div>
            </div>
        </div>
    `,
    itin2: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Bienvenida al paraíso maldivo
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>10:00 AM</strong> – Llegada al aeropuerto de Malé, bienvenida con cóctel de coco.<br>
                        <strong>11:00 AM</strong> – Traslado en lancha ecológica al resort.<br>
                        <strong>12:30 PM</strong> – Check-in en villa sobre el agua.<br>
                        <strong>01:00 PM</strong> – Almuerzo de bienvenida en restaurante sobre el agua.<br>
                        <strong>03:00 PM</strong> – Tour por el resort y presentación de programas de conservación.<br>
                        <strong>05:00 PM</strong> – Primera sesión de snorkel en el arrecife de la casa.<br>
                        <strong>07:00 PM</strong> – Cena bajo las estrellas en playa privada.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Conservación marina y vida submarina
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Yoga al amanecer en el muelle.<br>
                        <strong>08:00 AM</strong> – Desayuno buffet orgánico.<br>
                        <strong>09:30 AM</strong> – Participación en programa de plantación de corales.<br>
                        <strong>11:00 AM</strong> – Buceo con tiburones nodriza (para certificados).<br>
                        <strong>01:00 PM</strong> – Almuerzo en isla desierta privada.<br>
                        <strong>03:00 PM</strong> – Kayak de mar por manglares.<br>
                        <strong>05:00 PM</strong> – Taller sobre conservación de tortugas marinas.<br>
                        <strong>07:00 PM</strong> – Cena temática de mariscos sostenibles.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Cultura local y experiencias sostenibles
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno con vistas al océano.<br>
                        <strong>09:30 AM</strong> – Visita a isla local de pescadores.<br>
                        <strong>11:00 AM</strong> – Taller de artesanía con materiales reciclados del mar.<br>
                        <strong>01:00 PM</strong> – Almuerzo tradicional maldivo en familia local.<br>
                        <strong>03:00 PM</strong> – Tour por centro de rehabilitación de vida marina.<br>
                        <strong>05:00 PM</strong> – Relajación en spa con tratamientos naturales.<br>
                        <strong>07:00 PM</strong> – Cena de despedida y ceremonia de agradecimiento al océano.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Día 4: Aventura final y despedida
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:30 AM</strong> – Observación de delfines al amanecer.<br>
                        <strong>08:00 AM</strong> – Desayuno especial de despedida.<br>
                        <strong>09:30 AM</strong> – Última sesión de snorkel en el arrecife.<br>
                        <strong>11:00 AM</strong> – Tiempo libre para fotos y recuerdos.<br>
                        <strong>01:00 PM</strong> – Check-out y traslado al aeropuerto.<br>
                        <strong>03:00 PM</strong> – Vuelo de regreso con certificado de embajador ambiental.
                    </div>
                </div>
            </div>
        </div>
    `,
    itin3: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Llegada a Kyoto - Tradiciones milenarias
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>10:00 AM</strong> – Llegada a Kyoto, recepción en ryokan tradicional.<br>
                        <strong>11:00 AM</strong> – Check-in y ceremonia del té de bienvenida.<br>
                        <strong>01:00 PM</strong> – Almuerzo kaiseki con ingredientes locales y orgánicos.<br>
                        <strong>03:00 PM</strong> – Templo Kinkaku-ji (Pabellón Dorado) y jardines zen.<br>
                        <strong>05:00 PM</strong> – Templo Ryoan-ji y meditación guiada.<br>
                        <strong>07:00 PM</strong> – Cena en restaurante de agricultura local sostenible.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Artesanía y cultura sostenible
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno tradicional japonés.<br>
                        <strong>09:30 AM</strong> – Taller de cerámica con maestros artesanos locales.<br>
                        <strong>11:30 AM</strong> – Visita a taller de textiles de seda sostenible.<br>
                        <strong>01:00 PM</strong> – Almuerzo en restaurante vegetariano budista.<br>
                        <strong>03:00 PM</strong> – Templo Kiyomizu-dera y calles históricas de Higashiyama.<br>
                        <strong>05:00 PM</strong> – Taller de furoshiki (envoltura tradicional reutilizable).<br>
                        <strong>07:00 PM</strong> – Cena y experiencia en onsen (baños termales).
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Naturaleza y espiritualidad
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Meditación matutina en templo silencioso.<br>
                        <strong>08:30 AM</strong> – Desayuno macrobiótico.<br>
                        <strong>10:00 AM</strong> – Bosque de bambú de Arashiyama.<br>
                        <strong>11:30 AM</strong> – Templo Tenryu-ji y jardín paisajista.<br>
                        <strong>01:00 PM</strong> – Almuerzo en restaurante de granja a mesa.<br>
                        <strong>03:00 PM</strong> – Reserva de monos de Arashiyama (observación ética).<br>
                        <strong>05:00 PM</strong> – Taller de caligrafía japonesa.<br>
                        <strong>07:00 PM</strong> – Cena de despedida con geishas (opcional cultural).
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Día 4: Comunidad y despedida consciente
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>09:00 AM</strong> – Desayuno y check-out.<br>
                        <strong>10:30 AM</strong> – Mercado Nishiki y productos orgánicos locales.<br>
                        <strong>12:00 PM</strong> – Taller de cocina sostenible con chef local.<br>
                        <strong>02:00 PM</strong> – Almuerzo con platos preparados en el taller.<br>
                        <strong>04:00 PM</strong> – Tiempo libre para compras de artesanías sostenibles.<br>
                        <strong>06:00 PM</strong> – Traslado al aeropuerto con certificado de viajero consciente.
                    </div>
                </div>
            </div>
        </div>
    `,
    itin4: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Bienvenida y tour en Antigua Guatemala
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:30 AM</strong> – Recogida en Ciudad de Guatemala o Aeropuerto y traslado a Antigua (1 h aprox.).<br>
                        <strong>09:30 AM</strong> – Check-in en hotel boutique.<br>
                        <strong>10:00 AM</strong> – City Tour por Antigua Guatemala:<br>
                        • Arco de Santa Catalina<br>
                        • Iglesia La Merced<br>
                        • Convento Las Capuchinas<br>
                        • Parque Central y Catedral<br>
                        <strong>01:00 PM</strong> – Almuerzo en Restaurante Casa Escobar<br>
                        <strong>03:00 PM</strong> – Tour de Café en Finca Filadelfia: proceso, degustación y vistas.<br>
                        <strong>05:30 PM</strong> – Tiempo libre para compras en mercados artesanales.<br>
                        <strong>07:00 PM</strong> – Cena en Restaurante Fridas<br>
                        <strong>Noche</strong> en Hotel Boutique Antigua Guatemala.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Aventura y Fantasía en Hobbitenango
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:30 AM</strong> – Desayuno en hotel Boutique en Antigua Guatemala.<br>
                        <strong>08:30 AM</strong> – Traslado a Hobbitenango (20 min).<br>
                        <strong>09:00 AM</strong> – Exploración del parque temático:<br>
                        • Aldea Hobbit<br>
                        • Miradores (incluyendo "El Coloso y su Mano de Piedra")<br>
                        • Columpio gigante a 2,500 m de altura<br>
                        • Mini golf y juegos de feria<br>
                        <strong>Actividades:</strong> tiro con arco y hacha.<br>
                        <strong>01:00 PM</strong> – Almuerzo en restaurante temático con vistas a los volcanes.<br>
                        <strong>03:00 PM</strong> – Caminata por senderos y sesión fotográfica en miradores.<br>
                        <strong>05:00 PM</strong> – Check-in en cabaña temática (Casita del Sueño, Nido o Cala Esmeralda).<br>
                        <strong>07:00 PM</strong> – Cena en la cabaña (opcional con vino).<br>
                        <strong>Noche</strong> mágica en Hobbitenango.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Amanecer entre volcanes y despedida
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>06:00 AM</strong> – Amanecer con vistas a los volcanes Agua, Fuego y Acatenango.<br>
                        <strong>07:30 AM</strong> – Desayuno en la cabaña.<br>
                        <strong>09:00 AM</strong> – Tiempo libre para fotos y actividades adicionales.<br>
                        <strong>11:00 AM</strong> – Check-out y traslado a Antigua.<br>
                        <strong>12:00 PM</strong> – Almuerzo en restaurante con vista panorámica Restaurante Altamira.<br>
                        <strong>02:00 PM</strong> – Regreso a Ciudad de Guatemala o aeropuerto.<br>
                        <strong>04:00 PM</strong> – Fin del servicio.
                    </div>
                </div>
            </div>
        </div>
    `,
    itin5: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Bienvenida a la biodiversidad costarricense
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>10:00 AM</strong> – Llegada al aeropuerto Juan Santamaría, bienvenida con jugo de frutas tropicales.<br>
                        <strong>11:00 AM</strong> – Traslado a lodge ecológico en la zona de Arenal.<br>
                        <strong>01:00 PM</strong> – Check-in y almuerzo familiar con vista al volcán.<br>
                        <strong>03:00 PM</strong> – Tour por jardín de mariposas y ranario.<br>
                        <strong>04:30 PM</strong> – Canopy familiar seguro para todas las edades.<br>
                        <strong>06:00 PM</strong> – Cuentacuentos sobre la naturaleza local.<br>
                        <strong>07:30 PM</strong> – Cena buffet con ingredientes orgánicos locales.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Volcanes, aguas termales y aventura
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:30 AM</strong> – Desayuno familiar con vista al volcán Arenal.<br>
                        <strong>09:00 AM</strong> – Sendero por el parque nacional Volcán Arenal.<br>
                        <strong>11:00 AM</strong> – Observación de aves y vida silvestre con guías expertos.<br>
                        <strong>01:00 PM</strong> – Almuerzo en restaurante con vistas al lago Arenal.<br>
                        <strong>03:00 PM</strong> – Aguas termales familiares con toboganes.<br>
                        <strong>05:00 PM</strong> – Taller de chocolate orgánico (los niños pueden participar).<br>
                        <strong>07:00 PM</strong> – Cena temática y noche de juegos ecológicos.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Reserva biológica y vida silvestre
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno y check-out.<br>
                        <strong>09:30 AM</strong> – Traslado a reserva biológica privada.<br>
                        <strong>10:30 AM</strong> – Safari fotográfico en búsqueda de perezosos, monos y tucanes.<br>
                        <strong>12:30 PM</strong> – Almuerzo campestre en la reserva.<br>
                        <strong>02:30 PM</strong> – Plantación de árboles nativos (actividad familiar).<br>
                        <strong>04:00 PM</strong> – Visita a centro de rescate de animales.<br>
                        <strong>06:00 PM</strong> – Cena de despedida y certificado de guardián de la naturaleza.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Día 4: Cultura local y despedida sostenible
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>09:00 AM</strong> – Visita a escuela local sostenible.<br>
                        <strong>10:30 AM</strong> – Taller de artesanía con materiales reciclados.<br>
                        <strong>12:00 PM</strong> – Almuerzo con familia campesina local.<br>
                        <strong>02:00 PM</strong> – Tiempo libre para compras de souvenirs ecológicos.<br>
                        <strong>04:00 PM</strong> – Traslado al aeropuerto.<br>
                        <strong>06:00 PM</strong> – Vuelo de regreso con kit de semillas nativas.
                    </div>
                </div>
            </div>
        </div>
    `,
    itin6: `
        <div class="accordion" id="itineraryAccordion">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Día 1: Marrakech - La ciudad roja
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>09:00 AM</strong> – Llegada a Marrakech, té de bienvenida con hierbas locales.<br>
                        <strong>10:00 AM</strong> – Check-in en riad sostenible con jardín interior.<br>
                        <strong>11:30 AM</strong> – Tour por Medina y zocos con guía local.<br>
                        <strong>01:00 PM</strong> – Almuerzo en restaurante de cooperativa de mujeres.<br>
                        <strong>03:00 PM</strong> – Visita a taller de artesanía con apoyo a comunidades.<br>
                        <strong>05:00 PM</strong> – Jardín Majorelle y museo Berber.<br>
                        <strong>07:00 PM</strong> – Cena tradicional con música en vivo.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Día 2: Montañas del Atlas y comunidades bereberes
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno tradicional con pan recién horneado.<br>
                        <strong>09:00 AM</strong> – Excursión a las montañas del Atlas.<br>
                        <strong>11:00 AM</strong> – Visita a cooperativa de aceite de argán (sostenible).<br>
                        <strong>01:00 PM</strong> – Almuerzo en casa de familia bereber.<br>
                        <strong>03:00 PM</strong> – Caminata por valles con vistas espectaculares.<br>
                        <strong>05:00 PM</strong> – Taller de alfombras con artesanas locales.<br>
                        <strong>07:00 PM</strong> – Cena bajo las estrellas en kasbah tradicional.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Día 3: Esencia del desierto sostenible
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Desayuno y partida hacia el desierto.<br>
                        <strong>09:00 AM</strong> – Visita a proyecto de conservación de gacelas.<br>
                        <strong>11:30 AM</strong> – Llegada a campamento ecológico del desierto.<br>
                        <strong>01:00 PM</strong> – Almuerzo con ingredientes del desierto.<br>
                        <strong>03:00 PM</strong> – Paseo en camellos responsable (sin explotación animal).<br>
                        <strong>05:00 PM</strong> – Taller de astronomía beduina.<br>
                        <strong>07:00 PM</strong> – Cena alrededor del fuego con música tradicional.<br>
                        <strong>Noche</strong> en tienda de campaña ecológica confortable.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Día 4: Essaouira - Costa atlántica
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>07:00 AM</strong> – Amanecer en el desierto y desayuno.<br>
                        <strong>09:00 AM</strong> – Traslado a Essaouira (ciudad costera).<br>
                        <strong>11:30 AM</strong> – Tour por la medina y puerto pesquero.<br>
                        <strong>01:00 PM</strong> – Almuerzo de pescado fresco sostenible.<br>
                        <strong>03:00 PM</strong> – Visita a cooperativa de mujeres pescadoras.<br>
                        <strong>05:00 PM</strong> – Tiempo libre para disfrutar de la playa.<br>
                        <strong>07:00 PM</strong> – Cena en restaurante con productos locales.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Día 5: Regreso consciente a Marrakech
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#itineraryAccordion">
                    <div class="accordion-body">
                        <strong>08:00 AM</strong> – Desayuno en la costa.<br>
                        <strong>10:00 AM</strong> – Traslado de regreso a Marrakech.<br>
                        <strong>12:00 PM</strong> – Visita a jardín secreto y taller de cerámica.<br>
                        <strong>01:30 PM</strong> – Almuerzo de despedida en restaurante sostenible.<br>
                        <strong>03:00 PM</strong> – Tiempo libre para compras finales.<br>
                        <strong>05:00 PM</strong> – Traslado al aeropuerto.<br>
                        <strong>07:00 PM</strong> – Vuelo de regreso con certificado de viajero responsable.
                    </div>
                </div>
            </div>
        </div>
    `
};

// Función para abrir el modal con detalles del viaje
function openModal(title, image, description, duration, groupSize, accommodation, meals, price, mapUrl, itineraryId) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalDuration').textContent = duration;
    document.getElementById('modalGroupSize').textContent = groupSize;
    document.getElementById('modalAccommodation').textContent = accommodation;
    document.getElementById('modalMeals').textContent = meals;
    document.getElementById('modalPrice').textContent = price;
    
    // Guardar la URL del mapa para este viaje
    currentMapUrl = mapUrl;
    
    // Cargar el itinerario correspondiente
    const itineraryContent = document.getElementById('itineraryContent');
    if (itineraries[itineraryId]) {
        itineraryContent.innerHTML = itineraries[itineraryId];
    }
    
    // Resetear el mapa
    document.getElementById('mapOverlay').style.display = 'flex';
    document.getElementById('mapFrame').style.display = 'none';
    document.getElementById('mapFrame').src = '';
    
    document.getElementById('detailModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para abrir el mapa
function openMap() {
    const overlay = document.getElementById('mapOverlay');
    const mapFrame = document.getElementById('mapFrame');
    
    // Ocultar overlay con animación
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
    
    // Cargar el mapa específico del destino
    mapFrame.src = currentMapUrl;
    mapFrame.style.display = 'block';
    
    showToast('Mapa cargado correctamente');
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para reservar ahora
function bookNow() {
    closeModal();
    showToast('¡Reserva iniciada! Te contactaremos pronto.');
}

// Función para mostrar notificaciones toast
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Función para cargar más viajes
function loadMore() {
    showToast('Cargando más viajes...');
    // Aquí iría la lógica para cargar más viajes dinámicamente
}

// Función para resetear filtros
function resetFilters() {
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    document.querySelector('.filter-tag[data-filter="all"]').classList.add('active');
    
    // Mostrar todas las tarjetas
    document.querySelectorAll('.travel-card').forEach(card => {
        card.style.display = 'block';
    });
    
    showToast('Filtros restablecidos');
}

// Filtrar por categoría
document.querySelectorAll('.filter-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        // Actualizar etiqueta activa
        document.querySelectorAll('.filter-tag').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Mostrar/ocultar tarjetas según el filtro
        document.querySelectorAll('.travel-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Manejo del formulario de newsletter
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showToast('¡Gracias por suscribirte a nuestro newsletter!');
    this.reset();
});

// Menú móvil
document.getElementById('mobileMenu').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    }
});

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Cerrar menú móvil si está abierto
            const navLinks = document.getElementById('navLinks');
            if (window.innerWidth <= 992 && navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            }
        }
    });
});