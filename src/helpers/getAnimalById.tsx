import { animals } from "@/constants/AdoptionAnimals";

export const getAnimalById = (id: string) => {
    return animals.find( animal => animal.id === id)
}