import type { NextPage } from "next";
import Image from "next/image";
import {
  peopleUrl,
  peopleImages,
  planetsUrl,
  filmsUrl,
  speciesUrl,
  vehiclesUrl,
  starshipsUrl,
} from "../../constants/constants";
import { cardLayout, cardsContainer, imageContainer } from "./styles";

const Home: NextPage = (props) => {
  const { characters: sl }: any = props;
  return (
    <>
      <h1><Image width={450} height={100} src={"https://fontmeme.com/permalink/220904/f7682945b794f0691beb399161c6c4b8.png"} alt={"title"} /></h1>
      <div className={cardsContainer}>
        {sl.map((person: any) => (
          <div key={person.name} className={cardLayout}>
            <div className={imageContainer}>
              <Image
                src={person.image}
                width={100}
                height={100}
                alt={person.name}
                layout="responsive"
              />
            </div>
            <h2>{person.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const [people, planets, films, species, vehicles, starships] =
    await Promise.all([
      fetch(peopleUrl),
      fetch(planetsUrl),
      fetch(filmsUrl),
      fetch(speciesUrl),
      fetch(vehiclesUrl),
      fetch(starshipsUrl),
    ]);
  const peopleData = await people.json();
  const characters = peopleData.results.slice(0, 5);
  characters.forEach((person: any, idx: number) => {
    person.image = peopleImages[idx];
  });
  // Pass data to the page via props
  return { props: { characters } };
}

export default Home;
