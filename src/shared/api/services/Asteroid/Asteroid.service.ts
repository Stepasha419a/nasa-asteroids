import { Asteroid } from '../../interfaces';
import data from './data.json';
import singleData from './singleData.json';

export interface GetAsteroidsResponse {
  asteroids: Asteroid[];
  nextLink: string;
}

class AsteroidService {
  async getAsteroids(nextLink: string | null): Promise<GetAsteroidsResponse> {
    if (nextLink) {
      const res = await fetch(nextLink, {
        headers: { 'Access-Control-Allow-Origin': 'http://api.nasa.gov' },
      });
      const data = await res.json();

      return {
        asteroids: Object.values(data.near_earth_objects)[0] as Asteroid[],
        nextLink: data.links.next,
      };
    }

    const link = this.getAsteroidsLink();

    const res = await fetch(link);
    const data = await res.json();

    return {
      asteroids: Object.values(data.near_earth_objects)[0] as Asteroid[],
      nextLink: data.links.next,
    };
  }

  private getAsteroidsLink(): string {
    const nowDate = new Date();

    const year = nowDate.getFullYear();
    const day = nowDate.getDate();
    const month = nowDate.getMonth() + 1;

    const startDate = `${year}-${month}-${day}`;

    const link = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

    return link;
  }

  async getAsteroidsByIds(ids: string[]): Promise<Asteroid[]> {
    const asteroids = await Promise.all(
      ids.map(async (id) => {
        const asteroid = await this.getAsteroid(id);

        return asteroid;
      })
    );

    return asteroids;
  }

  async getAsteroid(asteroidId: string): Promise<Asteroid> {
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();

    return data;
  }
}

export const asteroidService = new AsteroidService();
