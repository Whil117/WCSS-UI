import { FC } from 'react';
import { useRouter } from 'next/router';
import { cars } from '..';
import Image from 'next/image';
type Props = {};

const Article: FC<Props> = (props) => {
  const router = useRouter();
  const { id } = router.query;
  // const idCar = id as number as unknown

  const car = cars.filter((car) => car.id === Number(id))[0];
  console.log(car);

  return (
    <div>
      <h1>Article {id}</h1>
      <h2>{car.name}</h2>
      <p>{car.year}</p>
      <Image src={car.image} alt={car.name} width={300} height={300} />
    </div>
  );
};

export default Article;
