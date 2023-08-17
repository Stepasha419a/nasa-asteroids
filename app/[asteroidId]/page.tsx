import { Asteroid } from '@/views/Asteroid';

interface AsteroidPageProps {
  params: {
    asteroidId: string;
  };
}

export default function AsteroidPage({ params }: AsteroidPageProps) {
  return <Asteroid asteroidId={params.asteroidId} />;
}
