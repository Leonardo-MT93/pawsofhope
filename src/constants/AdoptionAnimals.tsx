import adoption0 from '../images/adoption0.jpg'
import adoption1 from '../images/adoption1.jpg'
import adoption2 from '../images/adoption2.jpg'
import adoption3 from '../images/adoption3.jpg'
import adoption4 from '../images/adoption4.jpg'

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
      "name": "Ares 💙",
      "image": adoption0,
      "description": "Ares es un perrito de 1 año, castrado y de tamaño chico. Es amigable con otros perros y le encanta recibir cariño.",
      "characteristics": ["1 año", "cariñoso", "compañero"]
    },
    {
      "id": "101",
      "name": "Moana 💜",
      "image": adoption1,
      "description": "Moana es una perrita muy cariñosa y le encanta estar cerca de las personas. Es una ovejera belga, castrada de 2 años.",
      "characteristics": ["2 años","activa", "juguetona"]
    },
    {
      "id": "102",
      "name": "Skay 💜",
      "image": adoption2,
      "description": "Skay es un perrita rescatada del maltrato. Le gusta descansar al sol, jugar y es de tamaño mediana.",
      "characteristics": ["1 año", "valiente"]
    },
    {
      "id": "103",
      "name": "Hembrita 💜",
      "image": adoption3,
      "description": "Esta hembrita fue rescatada y esta en búsqueda de una adopción responsable. Es muy chiquita y le encantan los mimos.",
      "characteristics": ["2 meses", "cariñosa"]
    },
    {
      "id": "200",
      "name": "Cachorros de Moana 💞",
      "image": adoption4,
      "description": "Ellos son los cachorros de Moana. Son muy curiosos y les encanta explorar su entorno. Son cachorros mestizos de pastor belga.",
      "characteristics": ["2 Meses", "activos", "juguetones"]
    },
  ];
  