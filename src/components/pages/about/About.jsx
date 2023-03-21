import React, { useEffect, useState } from "react";
import style from "./About.module.css";

function About() {
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://www.pngplay.com/wp-content/uploads/10/Rick-And-Morty-PNG-Images-HD.png';
    img.onload = () => setLoading(img);
  }, []);

  return (
    <>
      <section className={style.aboutPrincipal}>
        {loading ? (
          <>
            <div className={style.divTexto}>
              <h1>Rick y Morty</h1>
              <p aling="center">
                Rick y Morty en mi humilde opinion es una grandiosa serie para
                adultos, basada en la parodio de una de las mejores peliculas
                que el cine nos pudo mostrar "Volver al Futuro", y aunque
                actualmente la tematica de los capitulos en la serie no guardan
                profunda relacion con la pelicula, es inevitable no comparar al
                Doc Emet Brown y al adolecente Marty McFly con el hebrio y
                absolutamente loco Rick Zanchez y su timido nieto Morty.
                <br></br>
                <br></br>
                La serie nos habla sobre las aventuras bastante descontroladas
                de Rick Sanchez, quien podria conciderarse como el hombre mas
                inteligente del universo, y un amante apacionado del alchol, y
                de su introvertido nieto Morty a quien se le hace sumamente
                dificil llevar una vida normal debido a los constantes viajes
                que su abuelo lo hace tomar con el.
                <br></br>
                <br></br>
                Durante sus viajes vamos a conocer planetas, criaturas, y
                realidades alternas particularmente extrañas pero sumamente
                interesantes ,eso sin tomar en cuenta que vamos a poder ver
                varios copitulos muy pero muy sangrientos e impactantes.
                <br></br>
                <br></br>
                Asi que ya sabes, si eres un fanatico del humor bizarro y la
                accion descontrolada, esta serie esta hecha a tu medidad.
              </p>
            </div>
            <div className={style.divImage}>
              <img
                src={loading.src}
                alt="rick-morty-about"
              />
            </div>
          </>
        ) : (
          <>
            <h2>Cargando...</h2>
          </>
        )}
      </section>
    </>
  );
}

export default About;
