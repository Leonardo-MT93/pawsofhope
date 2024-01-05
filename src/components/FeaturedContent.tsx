
const FeaturedContent = () => {
    return (
      <div className="grid grid-cols-3 gap-4 w-full">
          <div className="col-span-1 bg-gray-200">
            <h2>Colaboradores</h2>
              <h3>MercadoLibre</h3>
              <h3>LeoniFy</h3>
              <h3>LeoninoStore</h3>
              <h3>MercadoPago</h3>
          </div>
          <div className="col-span-2 bg-gray-300">
            <h2>Novedades</h2>
              {/* Aquí van las novedades */}
          </div>
      </div>
    )
  }
  
  export default FeaturedContent