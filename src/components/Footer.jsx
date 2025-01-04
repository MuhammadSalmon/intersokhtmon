import React from "react";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-customPurple py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:w-[1024px] md:flex-row justify-between gap-8 items-center">
        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center md:items-start md:w-1/3">
          <h3 className="text-xl font-bold mb-4 text-center md:text-left">ООО “ИНТЕРСОХТМОН”</h3>
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto rounded-md mb-4"
          />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <ul className="space-y-2 text-center md:text-left">
            <li>
              <strong>Генеральный директор:</strong> Касиров Умед Алиевич
            </li>
            <li>
              <strong>Тел:</strong>{" "}
              <a href="tel:+992988885001" className="hover:underline">
                +(992) 988-88-50-01
              </a>
            </li>
            <li>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:intersokhtmon@mail.ru" className="hover:underline">
                intersokhtmon@mail.ru
              </a>
            </li>
            <li>
              <strong>Адрес:</strong> Республика Таджикистан, г. Душанбе, р.
              Фирдавси, ул. Гулбутта
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-900 transition-colors text-2xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-300 transition-colors text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ООО “ИНТЕРСОХТМОН”. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
