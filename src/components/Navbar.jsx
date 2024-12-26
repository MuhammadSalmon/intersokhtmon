import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const sections = ['about', 'services', 'projects', 'home'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    let currentSection = '';
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });
    setActiveSection(currentSection);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const isRootPage = location.pathname === '/';

  const isActive = (section) => activeSection === section;

  return (
    <header
      className={`${
        isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''
      }  backdrop-blur-md bg-transparent shadow-md`}
    >
      {isRootPage && !isSticky && (
        <div className="bg-transparent border-b hidden md:block">
          <div className="container mx-auto flex items-center justify-around py-1">
            <a href="/" className="flex">
              <img className="h-24 ml-14" src={logo} alt="INTERCOXTMON лого" />
            </a>
            <div className="hidden lg:flex space-x-10 mx-4">
              <div className="flex flex-col">
                <span className="font-semibold text-slate-100">Телефон:</span>
                <a href="tel:+992411005555" className="text-slate-100 hover:underline">
                  +(992) 988-88-50-01
                </a>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 flex flex-col">
                <span className="font-semibold text-slate-100">ДУШ-ШАН:</span>
                <span className="text-slate-100 font-medium">08:00 - 18:00</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-100">Адрес: Республика Таджикистан, г. Душанбе, </span>
                <a className="text-slate-100 hover:underline">р. Фирдавси, ул. Гулбутта</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`container dark mx-auto px-4 py-4 flex items-center ${
          isSticky || !isRootPage ? 'justify-around' : 'justify-center'
        } ${isSticky ? 'pt-5' : ''}`}
      >
        {isSticky && (
          <a href="/" className="hidden md:flex items-center">
            <img className="h-12" src={logo} alt="ИНТЕРСОХТМОН лого" />
          </a>
        )}

        <div className="flex md:hidden w-full items-center justify-between">
          <a href="/" className="flex items-center">
            <img className="h-8" src={logo} alt="ТГЕМ лого" />
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        <nav className={`hidden md:flex items-center text-slate-100 space-x-8 text-lg`}>
          <a
            href="/"
            className={`hover:text-blue-500 ${
              isActive('home') ? 'bg-blue-100  text-gray-700 rounded-md px-3 py-1' : ''
            }`}
          >
            ГЛАВНОЕ
          </a>
          <a
            href="#about"
            className={`hover:text-blue-500 ${
              isActive('about') ? 'bg-blue-100 text-gray-700  rounded-md px-3 py-1' : ''
            }`}
          >
            О НАС
          </a>
          <a
            href="#services"
            className={`hover:text-blue-500 ${
              isActive('services') ? 'bg-blue- text-gray-700 100 rounded-md px-3 py-1' : ''
            }`}
          >
            УСЛУГИ
          </a>
          <a
            href="#projects"
            className={`hover:text-blue-500 ${
              isActive('projects') ? 'bg-blue- text-gray-700 100 rounded-md px-3 py-1' : ''
            }`}
          >
            ПРОЕКТЫ
          </a>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className="bg-gray-100 dark md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li>
              <a
                href="/"
                className={`hover:text-blue-500 ${
                  isActive('home') ? 'bg-blue-100  text-gray-700 px-3 py-1 rounded-md' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                ГЛАВНОЕ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`hover:text-blue-500 ${
                  isActive('about') ? 'bg-blue-100 text-gray-700  px-3 py-1 rounded-md' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                О НАС
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`hover:text-blue-500 ${
                  isActive('services') ? 'bg-blue- text-gray-700 100 px-3 py-1 rounded-md' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                УСЛУГИ
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`hover:text-blue-500 ${
                  isActive('projects') ? 'bg-blue- text-gray-700 100 px-3 py-1 rounded-md' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                ПРОЕКТЫ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
