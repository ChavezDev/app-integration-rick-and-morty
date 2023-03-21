import { useEffect, useState } from "react";
import style from "./LoginTemplate.module.css";

const LoginTemplate = ({ children, title }) => {
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png";
    img.onload = () => setLoading(img);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <section className={style.container_nivelUno}>
            <div className={style.container_nivelDos}>
              <div className={style.container_nivelTres}>
                <div className={style.container_nivelCuatro}>
                  <div className={style.container_nivelCinco}>
                    <div className={style.container_nivelSeis}>
                      <div className={style.container_formUno}>
                        <div className={style.container_formDos}>
                          <div className={style.container_formHeader}>
                            <img
                              className={style.img_form}
                              src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Images.png"
                              alt="logo"
                            />
                            <h4 className={style.title_form}>{title}</h4>
                          </div>
                          {children}
                        </div>
                      </div>
                      <div className={style.container_textUno}>
                        <div className={style.container_textDos}>
                          <span className={style.container_span}>
                            Aventurate con Rick an Morty...
                          </span>
                          <h4 className="text-4xl">
                            Estas a punto de conocer personajes alucinantes
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className={style.container_loading}>
            <h2>Cargando...</h2>
          </div>
        </>
      )}
    </>
  );
};

export default LoginTemplate;
