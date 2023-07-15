'use client'

import Link from '../components/Link/Link.jsx';
import { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js' ;
export default function Home() {

  useEffect(() => {
    //require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    <main >
      <h1>Ejercicios en React</h1>
      <h2 className="text-3xl font-bold underline">Hello, Next.js!</h2>
      <ul>
        <li>
          <Link href="/docentes" text="Docentes" />
        </li>
        <li>
          <Link href="/cursos" text="Cursos" />
        </li>
      </ul>
    </main>
  )
}
