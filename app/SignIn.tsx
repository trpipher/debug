'use client';
import { getSession, signIn, useSession } from 'next-auth/react';
import React from 'react';

function SignIn() {
  const session = useSession();
  console.log('client useSession', session);
  return <button onClick={() => signIn()}>SignIn</button>;
}

export default SignIn;
