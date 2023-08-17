import { Asteroid } from '@/shared/api/interfaces';
import { toCorrectNumeralForm, toNumberWithSpaces } from '@/shared/lib/helpers';

export function getAsteroidData(
  asteroid: Asteroid,
  isKmDistance: boolean,
  orderedAsteroidIds: string[] | undefined
) {
  const id = asteroid.id;
  const name = asteroid.name;
  const date = asteroid.close_approach_data[0].close_approach_date_full;

  const distance = Math.round(
    isKmDistance
      ? +asteroid.close_approach_data[0].miss_distance.kilometers
      : +asteroid.close_approach_data[0].miss_distance.lunar
  );
  const distanceWithSpaces = `${toNumberWithSpaces(distance)} ${
    isKmDistance
      ? 'км'
      : toCorrectNumeralForm(distance, [
          'лунная орбита',
          'лунные орбиты',
          'лунных орбит',
        ])
  }`;

  const diameter = Math.round(
    (asteroid.estimated_diameter.meters.estimated_diameter_min +
      asteroid.estimated_diameter.meters.estimated_diameter_max) /
      2
  );

  const isBig = diameter > 100;
  const imageUrl = isBig ? 'big-asteroid.png' : 'small-asteroid.png';

  const isHazardous = asteroid.is_potentially_hazardous_asteroid;

  const isOrdered = orderedAsteroidIds?.includes(id);

  return {
    id,
    name,
    date,
    distance: distanceWithSpaces,
    diameter,
    isBig,
    imageUrl,
    isHazardous,
    isOrdered,
  };
}
