import Link from "next/link";
import propTypes from "prop-types";

import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import Logo from "public/images/logoSVG.svg";
import DefaultAvatar from "public/images/default-avatar.svg";

export default function Header({ onLight }) {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const getUserCookies = () => {
      const cookieString = document.cookie;
      const cookieArray = cookieString.split(';').map(cookie => cookie.trim());
  
      const userCookie = cookieArray.find(cookie => cookie.startsWith('BTSBIMBEL:user='));
  
      if (userCookie) {
        const userCookieValue = userCookie.substring('BTSBIMBEL:user='.length);
        try {
          const parsedUserCookies = JSON.parse(userCookieValue);
          return parsedUserCookies;
        } catch (error) {
          console.error('Error parsing user cookies:', error);
        }
      }
      
      return null;
    };
  
    const userCookies = getUserCookies();
    console.log(userCookies);
    setUser(userCookies);
  }, []);
  
  
  const linkColor = onLight ? "text-gray-900" : " text-white";

  const router = useRouter();

  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;

  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <header className="flex items-center justify-between">
      <div style={{ height: 54 }}>
        <Logo className="on-dark"></Logo>
      </div>
      <ul className="flex items-center">
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
        <li className="mt-8 md:mt-0">
          {user ? (
            <Link
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="inline-flex items-center px-6 py-3 ml-6 text-lg font-medium text-white transition-all duration-200 hover:bg-secondary hover:text-white"
            >
              <span className="mr-3 overflow-hidden border-2 border-secondary rounded-full">
                {user?.thumbnail ? (
                  <img
                    src={user?.thumbnail}
                    alt={user?.name ?? "Username"}
                    className="inline-block object-cover w-8 h-8"
                  />
                ) : (
                  <DefaultAvatar className="inline-block w-8 h-8 fill-secondary"></DefaultAvatar>
                )}
              </span>
              Hi, {user.name}
            </Link>
          ) : (
            <Link
              target="_blank"
              rel="noopener noereferrer"
              href={linkCTA}
              className="px-6 py-3 ml-6 text-lg font-medium text-white transition-all duration-200 bg-secondary hover:bg-red-500 hover:text-white"
            >
              {textCTA}
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};
