
function mostrar(seccion) {

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(elemento) {
        elemento.style.display = "none";
    });

    document.getElementById(seccion).style.display = "block";

    // Volver al comienzo de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Si entramos en Inicio, cargar las noticias
    if (seccion == "inicio") {
        cargarNoticias();
    }
}



// ========================================
// INFORMACIÓN DE LOS CURSOS Y PLANIFICACIONES
// ========================================

function curso(numero) {

    let texto = "";

    // ------------------------------------
    // PRIMER AÑO
    // ------------------------------------

    if (numero == 1) {

        texto = `
            <h3>1.º Año</h3>

            <p>Formación inicial y conocimientos generales.</p>

            <h3>planificaciones anuales</h3>

            <div class="documento">
                <h4>Matemática - 1.º Año</h4>
                <a href="planificacion.pdf/MATEMATICA%201%C2%BA%20A%203%C2%BA.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/MATEMATICA%201%C2%BA%20A%203%C2%BA.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>

            <div class="documento">
                <h4>Ciencias Naturales - 1.º Año</h4>
                <a href="planificacion.pdf/CS%20NATURALES%201%C2%BA%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/CS%20NATURALES%201%C2%BA%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>
        `;
    }


    // ------------------------------------
    // SEGUNDO AÑO
    // ------------------------------------

    if (numero == 2) {

        texto = `
            <h3>2.º Año</h3>

            <p>Continuación de la formación general y técnica.</p>

            <h3>planificaciones anuales</h3>

            <div class="documento">
                <h4>Matemática e Informática - 2.º Año</h4>
                <a href="planificacion.pdf/matematica%20informatica%202026%202%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/matematica%20informatica%202026%202%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>

            <div class="documento">
                <h4>Ciencias Naturales - 2.º Año</h4>
                <a href="planificacion.pdf/Cs.%20Naturales%202%C2%B0A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/Cs.%20Naturales%202%C2%B0A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>
        `;
    }


    // ------------------------------------
    // TERCER AÑO
    // ------------------------------------

    if (numero == 3) {

        texto = `
            <h3>3.º Año</h3>

            <p>Incorporación de nuevos conocimientos técnicos.</p>

            <h3>planificaciones anuales</h3>

            <div class="documento">
                <h4>Matemática e Informática - 3.º Año</h4>
                <a href="planificacion.pdf/matematica%20informatica%202026%203%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/matematica%20informatica%202026%203%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>

            <div class="documento">
                <h4>Ciencias Naturales - 3.º Año</h4>
                <a href="planificacion.pdf/Cs.%20Naturales%203%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/Cs.%20Naturales%203%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>
        `;
    }


    // ------------------------------------
    // CUARTO AÑO
    // ------------------------------------

    if (numero == 4) {

        texto = `
            <h3>4.º Año</h3>

            <p>Formación relacionada con la especialidad Automotores.</p>

            <h3>planificaciones anuales</h3>

            <div class="documento">
                <h4>Análisis Matemático - 4.º Año</h4>
                <a href="planificacion.pdf/An%C3%A1lisis%20Matematico%204%C2%B0%20a%C3%B1o.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/An%C3%A1lisis%20Matematico%204%C2%B0%20a%C3%B1o.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>

            <div class="documento">
                <h4>Informática - 4.º Año</h4>
                <a href="planificacion.pdf/Informatica%204%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/Informatica%204%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>

            <div class="documento">
                <h4>Lengua y Producción de Conocimientos - 4.º Año</h4>
                <a href="planificacion.pdf/Planificacion%20Area%20LyPC%204%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/Planificacion%20Area%20LyPC%204%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>
        `;
    }


    // ------------------------------------
    // QUINTO AÑO
    // ------------------------------------

    if (numero == 5) {

        texto = `
            <h3>5.º Año</h3>

            <p>Profundización de los conocimientos técnicos y prácticos.</p>

            <h3>planificaciones anuales</h3>

            <div class="documento">
                <h4>Electricidad del Automotor - 5.º Año</h4>
                <a href="planificacion.pdf/Electricidad%20del%20automotor%205%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/Electricidad%20del%20automotor%205%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>

            <div class="documento">
                <h4>Elementos de Máquinas - 5.º Año</h4>
                <a href="planificacion.pdf/Elementos%20de%20maquinas%205%C2%B0%20A%C3%91O.pdf"
                   target="_blank" rel="noopener">
                    Ver PDF
                </a>
                <a href="planificacion.pdf/Elementos%20de%20maquinas%205%C2%B0%20A%C3%91O.pdf"
                   download>
                    Descargar PDF
                </a>
            </div>
        `;
    }


    // ------------------------------------
    // SEXTO AÑO
    // ------------------------------------

    if (numero == 6) {

        texto = `
            <h3>6.º Año</h3>

            <p>
                Las planificaciones anuales de este curso
                estarán disponibles próximamente.
            </p>
        `;
    }


    // Mostrar la información del curso
    document.getElementById("infoCurso").innerHTML = texto;
}


// ========================================
// NOTICIAS ONLINE
// ========================================

async function cargarNoticias() {

    let contenedor = document.getElementById("noticias-online");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = `
        <h2>📰 Noticias</h2>
        <p>Cargando noticias...</p>
    `;

    try {

        // Fuente de noticias
        let url =
            "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent(
                "https://www.neuqueninforma.gob.ar/feed/"
            );

        let respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener las noticias.");
        }

        let datos = await respuesta.json();

        if (!datos.items || datos.items.length == 0) {

            contenedor.innerHTML = `
                <h2>📰 Noticias</h2>
                <p>No se encontraron noticias en este momento.</p>
            `;

            return;
        }

        // Tomamos las últimas noticias
        let noticias = datos.items.slice(0, 5);

        let html = `
            <h2>📰 Noticias y novedades</h2>
            <p>Últimas noticias publicadas online</p>
        `;

        noticias.forEach(function(noticia) {

            html += `
                <div class="noticia">
                    <h3>${noticia.title}</h3>

                    <p>${noticia.description || ""}</p>

                    <a href="${noticia.link}"
                       target="_blank"
                       rel="noopener">
                        Leer noticia
                    </a>
                </div>
            `;

        });

        contenedor.innerHTML = html;

    } catch (error) {

        console.log("Error al cargar las noticias:", error);

        contenedor.innerHTML = `
            <h2>📰 Noticias y novedades</h2>
            <p>
                No se pudieron cargar las noticias en este momento.
            </p>
        `;
    }
}


// ========================================
// CARGAR AL ABRIR LA PÁGINA
// ========================================

document.addEventListener("DOMContentLoaded", function() {

    // Mostrar Inicio al entrar
    mostrar("inicio");
    // Cargar noticias automáticamente
    cargarNoticias();

});

