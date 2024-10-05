
export default function EditDishPage({params}) {


  return (
    <div>
      <h2>Editar Reseña del Plato: {params.id}</h2>
      <p>
        El plato de {params.id} es buenísimo. 20/10.
      </p>
    </div>
  );
}