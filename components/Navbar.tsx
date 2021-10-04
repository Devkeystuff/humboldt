import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      {/* TODO: Logo */}
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
