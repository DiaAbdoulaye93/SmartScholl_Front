import React, { lazy, Suspense } from 'react';

const LazyClass = lazy(() => import('./Class'));

const Class = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClass {...props} />
  </Suspense>
);

export default Class;
