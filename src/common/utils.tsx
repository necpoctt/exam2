import { Suspense } from 'react';
import Loading from '../shared/Loading';

const WaitingComponent = (Component: any) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export default WaitingComponent;
