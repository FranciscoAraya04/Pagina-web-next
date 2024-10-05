import Link from "next/link"
export default function ContactPage() {
    return (
      <div>
        <h2>Contacto con el Dueño de Newton</h2>
        <p>
          Si tienes alguna pregunta o quieres recomendar un nuevo plato para que Newton pruebe,
          no dudes en ponerte en contacto con su dueño, Francisco Araya.
        </p>
        <p>Correo electrónico: francisco.araya.work@gmail.com</p>
        <p>Teléfono: +56984240423</p>
        <Link href="/">Toca aquí para volver a la página principal</Link>

      </div>
    );
  }
  