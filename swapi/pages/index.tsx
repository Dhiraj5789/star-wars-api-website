import type { NextPage } from 'next'
import Image from "next/image";
import { peopleImages } from '../constants/people';

const Home: NextPage = (props) => {
  const { sl }:any = props;
  return (
    <><h1>Star Wars</h1>
    {sl.map((person:any)=><div key={person.name}>
<Image src={person.image} width={100} height={100} alt={person.name}/>
<h3>{person.name}</h3>
</div>)}
    </> 
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const people = "https://swapi.dev/api/people/";
  const res = await fetch(people);
  const data = await res.json()
  const sl = data.results.slice(0,5);
  sl.forEach((person:any, idx:number)=> {person.image = peopleImages[idx]})
  console.log(sl);
  // Pass data to the page via props
  return { props: { sl } }
}

export default Home