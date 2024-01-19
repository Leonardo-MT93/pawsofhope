import adoption0 from '../images/adoption0.jpg'
import adoption1 from '../images/adoption1.jpg'
import adoption2 from '../images/adoption2.jpg'
import adoption3 from '../images/adoption3.jpg'
import adoption4 from '../images/adoption4.jpg'
import adoption5 from '../images/adoption5.jpg'
import adoption6 from '../images/adoption6.jpg'
import adoption7 from '../images/adoption7.jpg'

interface Animal{
    "id": string,
    "name": string,
    "image": string,
    "description": string,
    "characteristics": string[]    
}

export const animals: Animal[] = [
    {
      "id": "100",
      "name": "Rocky",
      "image": adoption0,
      "description": "Rocky es un perrito muy activo que disfruta de largas caminatas y jugar al aire libre. Es amigable con otros perros y le encanta recibir cariño.",
      "characteristics": ["juguetón", "cariñoso", "activo"]
    },
    {
      "id": "101",
      "name": "Luna",
      "image": adoption1,
      "description": "Luna es una perrita muy cariñosa y le encanta estar cerca de las personas. Es juguetona y le gusta correr en el parque.",
      "characteristics": ["juguetón","activo", "inteligente"]
    },
    {
      "id": "102",
      "name": "Max",
      "image": adoption2,
      "description": "Max es un perrito tranquilo que disfruta de la compañía de su familia. Le gusta descansar al sol y recibir mimos.",
      "characteristics": ["solitario", "inteligente", "valiente"]
    },
    {
      "id": "103",
      "name": "Bella",
      "image": adoption3,
      "description": "Bella es una perrita muy tierna y le encanta jugar con pelotas. Es muy sociable y le gusta conocer a otros perros.",
      "characteristics": ["juguetón", "cariñoso","inteligente"]
    },
    {
      "id": "200",
      "name": "Coco",
      "image": adoption4,
      "description": "Coco es un perrito muy curioso y le encanta explorar su entorno. Es inteligente y aprende rápidamente nuevos trucos.",
      "characteristics": ["juguetón", "activo", "inteligente"]
    },
    {
      "id": "201",
      "name": "Toby",
      "image": adoption5,
      "description": "Toby es un perrito muy juguetón que siempre está lleno de energía. Le gusta correr y saltar, y es muy divertido de tener cerca.",
      "characteristics": ["juguetón","activo", "inteligente"]
    },
    {
      "id": "202",
      "name": "Daisy",
      "image": adoption6,
      "description": "Daisy es una perrita muy amorosa que siempre busca atención. Le gusta pasear y disfrutar del aire libre.",
      "characteristics": ["cariñoso", "inteligente", "valiente"]
    },
    {
      "id": "203",
      "name": "Charlie",
      "image": adoption7,
      "description": "Charlie es un perrito muy leal que siempre está atento a su familia. Es protector y cariñoso con los niños.",
      "characteristics": ["activo", "inteligente", "valiente"]
    },
    {
      "id": "204",
      "name": "Lucky",
      "image": adoption3,
      "description": "Lucky es un perrito alegre y juguetón que siempre tiene una sonrisa en su rostro. Le gusta jugar con otros perros.",
      "characteristics": ["juguetón", "activo", "inteligente"]
    },
    {
      "id": "205",
      "name": "Molly",
      "image": adoption0,
      "description": "Molly es una perrita muy dulce que siempre busca cariño. Le gusta acurrucarse en el sofá y dormir siestas.",
      "characteristics": ["cariñoso","inteligente", "valiente"]
    },
    {
      "id": "206",
      "name": "Rex",
      "image": adoption1,
      "description": "Rex es un perrito valiente y lleno de energía. Le gusta correr y jugar al aire libre.",
      "characteristics": ["juguetón","valiente"]
    },
    {
      "id": "207",
      "name": "Buddy",
      "image": adoption2,
      "description": "Buddy es un perrito muy fiel que siempre está al lado de su familia. Le gusta dar largos paseos y explorar nuevos lugares.",
      "characteristics": ["juguetón", "cariñoso"]
    },
    {
      "id": "208",
      "name": "Maggie",
      "image": adoption3,
      "description": "Maggie es una perrita muy dulce y cariñosa. Le gusta jugar con otros perros y recibir caricias.",
      "characteristics": ["juguetón", "cariñoso","valiente"]
    },
    {
      "id": "305",
      "name": "Oscar",
      "image": adoption4,
      "description": "Oscar es un perrito muy inteligente y aprende rápido. Le gusta aprender nuevos trucos y recibir premios.",
      "characteristics": ["activo", "inteligente", "valiente"]
    },
    {
      "id": "408",
      "name": "Ginger",
      "image": adoption5,
      "description": "Ginger es una perrita muy activa y juguetona. Le gusta correr y jugar al aire libre.",
      "characteristics": ["juguetón", "cariñoso", "activo"]
    }
  ];
  