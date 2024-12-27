import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-between md:grid-cols-3 gap-8 items-center">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-auto rounded-md shadow-md"
          />
        </div>

        {/* Contact Information */}
        <div className="col-span-2 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">ООО “ИНТЕРСОХТМОН”</h3>
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
              <a
                href="mailto:intersokhtmon@mail.ru"
                className="hover:underline"
              >
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
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.twitter.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/imod.tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ООО “ИНТЕРСОХТМОН”. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
