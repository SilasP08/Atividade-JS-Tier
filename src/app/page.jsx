import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <>
      <div className="conteiner">


        <div className="principal">
          <div className="hero-text">
            <h2>Unlock Your Business Potential With Facebook & Instagram Adversiting</h2>
            <div className="texto-span">
              <span>Facebook Premier Levarl Partner Agency</span>
            </div>
            <div className="btn-central">
              <button className="btn-central">Login</button>
            </div>
          </div>




          <div className="imagem-principal">
            <img src="/image/foguete.png" alt="" />
          </div>
        </div>

        <div className="imagens">
          <img src="/image/fece.png" alt="" />
          <img src="/image/google.png" alt="" />
          <img src="/image/forbes.png" alt="" />
          <img src="/image/inc500.png" alt="" />
          <h3>$100M</h3>
          <h3>15+</h3>
        </div>
        <div className="textos-pequenos">
          <p>Facebook Premier</p>
          <p>Google Endcorse</p>
          <p>Forbes Agency</p>
          <p>INC: 500</p>
          <p>In anual</p>
          <p>Years of Facebook</p>
        </div>
      </div>
    </>

  );
}
