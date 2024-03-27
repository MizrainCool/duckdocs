import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.subContainer}>
      <div className={styles.header}>
        <div>
          <Link href="#"><img src="/senate.svg" /></Link>
          <Link href="#" style={{ textDecoration: "none" }}><p>SOLUCIONES</p></Link>
          <Link href="#" style={{ textDecoration: "none" }}><p>RECURSOS</p></Link>
        </div>
        <button>INICIAR SESIÓN</button>
      </div>
      <div className={styles.banner}>
        <div>
          <h2>Una solución <b>legal</b> para cada etapa de tu negocio</h2>
          <p>
            Elige los servicios de nuestro catálogo que se ajustan 
            a los objetivos de tu empres, con nosotros, todo es  rápido
            y a un precio justo.
          </p>
        </div>
        <div>
          <img src="/laptop.svg" />
        </div>
      </div>
      <div className={styles.bloqueBlanco}>
        <h2>Servicios legales para iniciar tu negocio</h2>
        <div className={styles.subBloque}>
          <div style={{ textAlign: "center", width: "45%", display: "flex", alignItems: "center" }}>
            <img src="/servicios.svg" />
          </div>
          <div style={{ width: "60%" }}>
            <h3>Si vas a iniciar un nuevo negocio, emprendimiento o proyecto, estos servicios legales son para ti:</h3>
            <div style={{ padding: "1vh",  boxShadow: ".5vh .5vh .5vh .1vh", borderRadius: "2vh", marginBottom: "2vh" }}>
              <b>Constituye tu empresa</b>
              <p>Formalizamos tu empresa ante corredor público, la inscribirmos en el RPPC y te entregamos tu Acta Constitutiva.</p>
            </div>
            <div style={{ padding: "1vh", boxShadow: ".5vh .5vh .5vh .1vh", borderRadius: "2vh", marginBottom: "2vh" }}>
              <b>Registrar mi marca</b>
              <p>Realizamos un dictamen para determinar la probabilidad de éxito en el registro y nos encargamos de la presentación ante el IMPI.</p>
            </div>
            <div style={{ padding: "1vh", boxShadow: ".5vh .5vh .5vh .1vh", borderRadius: "2vh", marginBottom: "2vh" }}>
              <b>Crear un contrato</b>
              <p>Una biblioteca de contratos disponibles, redactados por abogados y enfocados en cada necesidad de tu negocio.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bloqueAzul}>
        <h3>Carga tus propios documentos o utiliza nuestras plantillas inteligentes para crear y firmar tus contratos.</h3>
        <div className={styles.cartas}>
          <div className={styles.carta}>
            <img src="/pm.svg" />
            <p>Publicidad y marketing</p>
          </div>
          <div className={styles.carta}>
            <img src="/fl.svg" />
            <p>Finanzas y legal</p>
          </div>
          <div className={styles.carta}>
            <img src="i.svg" />
            <p>Inmobiliarias</p>
          </div>
          <div className={styles.carta}>
            <img src="ed.svg" />
            <p>Eventos y deportes</p>
          </div>
          <div className={styles.carta}>
            <img src="r.svg" />
            <p>Restaurantes</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <h4>DuckDocs</h4>
          <p>+1000 Clientes</p>
          <p>+500 Empresas</p>
          <p>+1000 Marcas</p>
        </div>
        <div>
          <p>SERVICIOS</p>
          <hr/>
          <p>Constitución de empresas</p>
          <p>Registro de marca</p>
          <p>Biblioteca de contactos</p>
          <p>API Firma digital</p>
        </div>
        <div>
          <p>RECURSOS</p>
          <hr/>
          <p>Libro de ayuda legal</p>
          <p>Blog</p>
          <p>Facturar</p>
          <p>Aviso de privacidad</p>
        </div>
        <div>
          <p>REDES SOCIALES</p>
          <hr/>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
    </main>
  );
}