import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About KFORD */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">KFORD</h3>
            <p className="text-sm">
              Kashmir Foundation for Organization Research & Development. A recognized leader in child protection, disability affairs, and psychosocial rehabilitation since 2009.
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <ul className="text-sm space-y-3">
              <li className="flex items-start">
                <span className="mt-1 mr-2">&#x1F4CD;</span>
                <span>Near HDFC Bank, Baghat Barzulla, Sanat Nagar, Srinagar - 190005, J&K</span>
              </li>
              <li className="flex items-center">
                <span>&#x2709;</span>
                <a href="mailto:kfordjkorg@gmail.com" className="ml-2 hover:text-cyan-400">kfordjkorg@gmail.com</a>
              </li>
              <li className="flex items-center">
                <span>&#x1F4DE;</span>
                <a href="tel:+91-7006480076" className="ml-2 hover:text-cyan-400">+91-7006480076</a>
              </li>
               <li className="flex items-center">
                <span>&#x1F310;</span>
                <a href="http://www.kford.org" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-cyan-400">www.kford.org</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#about" className="hover:text-cyan-400">About Us</a></li>
              <li><a href="#work" className="hover:text-cyan-400">Our Work</a></li>
              <li><a href="#initiatives" className="hover:text-cyan-400">Initiatives</a></li>
              <li><a href="#milestones" className="hover:text-cyan-400">Milestones</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" aria-label="Facebook" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.791 4.649-.597.161-1.239.213-1.899.142.608 1.882 2.373 3.256 4.465 3.293-1.721 1.354-3.882 2.162-6.233 2.162-.404 0-.799-.024-1.187-.07 2.229 1.423 4.881 2.25 7.734 2.25 9.284 0 14.376-7.618 14.376-14.376 0-.219-.005-.436-.014-.652.986-.712 1.841-1.602 2.522-2.616z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-slate-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} KFORD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;