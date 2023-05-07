import Link from "next/link";
import propTypes from "prop-types";

import { useRouter } from "next/router";

import Logo from "public/images/logoSVG.svg";

export default function Header({ onLight }) {
  const linkColor = onLight ? "text-gray-900" : " text-white";

  const router = useRouter();

  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header className="flex justify-between items-center">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex">
        <li>
          <Link
            href="/#"
            className={[
              linkColor,
              " text-white hover:text-secondary text-lg px-6 py-3 font-medium ",
            ].join()}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/#"
            className={[
              linkColor,
              " text-white hover:text-secondary text-lg px-6 py-3 font-medium ",
            ].join()}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="/#"
            className={[
              linkColor,
              " text-white hover:text-secondary text-lg px-6 py-3 font-medium",
            ].join()}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/#"
            className={[
              linkColor,
              " text-white hover:text-secondary text-lg px-6 py-3 font-medium",
            ].join()}
          >
            Story
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={linkCTA}
            className=" bg-secondary hover:bg-red-800 transition-all duration-200 text-white hover:text-slate-500 text-lg px-6 py-3 font-medium ml-6"
          >
            {textCTA}
          </Link>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};
