const api = "https://swapi.dev/api/";

const people = "https://swapi.dev/api/people/";

export const getPeople = async () => {
    try{
        let response = await fetch(people);
        return await response.json();
      }catch(err){
        console.error(err);
      }
}