import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        <Card
          imageUrl="https://cdn.pixabay.com/photo/2023/09/04/06/59/dog-8232158_1280.jpg"
          name="Cachupin"
          description="Lleno de energía y listo para jugar. Dale a Cachupin el hogar amoroso que se merece!"
          tagText="Tag 1"
          tagColor="primary"
        />
        <Card
          imageUrl="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
          name="Peludito"
          description="Es juguetón, amigable y se lleva bien con los niños y otros animales. Haz de Peludito parte de tu familia hoy mismo!"
          tagText="Tag 2"
          tagColor="success"
        />
        <Card
          imageUrl="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg"
          name="Principito"
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Principito y experimenta un amor incondicional!"
          tagText="Tag 3"
          tagColor="warning"
        />
        <Card
          imageUrl="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg"
          name="Rey"
          description="Es un compañero leal y cariñoso que adora los mimos y los abrazos. Ayuda a Rey a encontrar su final feliz!"
          tagText="Tag 4"
          tagColor="danger"
        />

      </div>
      <Footer />
    </div>
  );
}

export default App;
