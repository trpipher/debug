import { getServerSession } from 'next-auth';
import React from 'react';
import SignIn from './SignIn';

async function Home() {
  const session = await getServerSession();
  console.log('Server Session', session);
  return <SignIn />;
}

export default Home;
