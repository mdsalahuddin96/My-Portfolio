

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-gray-500">
      <div className="container mx-auto px-6">
        <p>
          © {new Date().getFullYear()} Md. Salah uddin. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-blue-500 transition-colors">
            Github
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
