import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-white">
      <div>
        <h2 className="font-bold text-lg">Simple website</h2>
        <p className="text-sm">© 2024 All rights reserved.</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="https://twitter.com" className="text-white hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
        <a href="https://github.com" className="text-white hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.16 6.84 9.49.5.09.69-.22.69-.49v-1.72c-2.77.6-3.37-1.33-3.37-1.33-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.55 1.03 1.55 1.03.91 1.55 2.4 1.1 2.98.84.09-.66.36-1.1.65-1.35-2.21-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.03a9.6 9.6 0 015 0c1.9-1.3 2.74-1.03 2.74-1.03.55 1.42.2 2.47.1 2.73.64.7 1.02 1.6 1.02 2.7 0 3.85-2.35 4.7-4.58 4.94.37.32.69.95.69 1.91v2.84c0 .27.18.59.7.49C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
