import Link from "next/link"
export default function AboutPage() {
    return (
      <div>
        <h2>Sobre Newton</h2>
        <p>
          Newton es un Pastor Alemán nacido en 2020. Le encanta comer carne, especialmente
          la carne asada, y odia el pollo (¡es alérgico!). Cuando no está probando platos
          deliciosos, a Newton le gusta saltar cercas, escaparse en busca de aventuras,
          y salvar el día en secreto como un superhéroe. Vive con su dueño, Francisco Araya,
          quien se asegura de que Newton siempre tenga la mejor comida para reseñar.
        </p>
        <Link href="/">Toca aquí para volver a la página principal</Link>

      </div>
    );
  }
  