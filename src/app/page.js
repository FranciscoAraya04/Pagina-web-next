import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h2>¡Bienvenidos al Blog de Comida de Newton!</h2>
      <p>
        Únete a Newton, el Pastor Alemán, mientras revisa sus platos favoritos y
        comparte sus opiniones sobre las carnes más deliciosas. A Newton le encanta
        saltar, escaparse, y ser un superhéroe secreto, pero sobre todo, ¡le encanta
        una buena comida! 
      </p>
      <p>
        Si quieres saber más sobre mí, <Link href="/about">haz click aquí!</Link> 
      </p>
      <p>
        Si quieres contactar a mi dueño, <Link href="/contact">visita este link!</Link>
      </p>
      <Link href="/services">Haz click aquí para ver mis reseñas!</Link>
    </div>
  );
}
