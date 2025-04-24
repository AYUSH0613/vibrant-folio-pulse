
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-sm text-white/60">
      <div className="max-w-4xl mx-auto px-4">
        <p>© {currentYear} Ayush Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
