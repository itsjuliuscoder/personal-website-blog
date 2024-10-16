// components/SocialMediaIcons.js
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <ul className="flex space-x-8 list-none mt-4 mb-4">
      <li className="inline-block">
        <a href="https://www.instagram.com/juliuscoder/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-blue-500" />
        </a>
      </li>
      <li className="inline-block">
        <a href="https://www.linkedin.com/in/julius-olajumoke" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-blue-500" />
        </a>
      </li>
      <li className="inline-block">
        <a href="https://github.com/itsjuliuscoder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-blue-500" />
        </a>
      </li>
      <li className="inline-block">
        <a href="mailto:devcalledjulius@gmail.com" aria-label="Mail">
          <FaEnvelope className="text-2xl hover:text-blue-500" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaIcons;
