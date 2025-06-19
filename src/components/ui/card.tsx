import * as React from 'react';

export function Card({ children, className }: any) {
  return <div className={`rounded-xl shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: any) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
