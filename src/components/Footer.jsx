import React from 'react';

export default function Footer() {
  const date = new Date();

  return (
    <footer>
      <p>Copyright &#169; {date.getFullYear()}</p>
    </footer>
  );
}
