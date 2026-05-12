import { type PropsWithChildren } from 'react';

const PageWrapper = ({ children }: PropsWithChildren) => (
  <main className="page-wrapper">{children}</main>
);

export default PageWrapper;
