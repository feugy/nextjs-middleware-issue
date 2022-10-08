import { NextResponse } from 'next/server';

export default async (req) => {
  const { pathname, search } = req.nextUrl;
  console.log('MIDDLEWARE:', `${pathname}${search}`);
  if (pathname === '/') {
    console.log('Headers', req.headers);
  }
  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
