import Link from "next/link"
export default function EditDishPage({params}) {


  return (
    <div>
      <h2>Editar Reseña del Plato: {params.id}</h2>
      <p>
        El plato de {params.id} es buenísimo. 20/10.
      </p>
      <Link href="/">Toca aquí para volver a la página principal</Link>

    </div>
  );
}