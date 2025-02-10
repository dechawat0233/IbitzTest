const Footer = () => {
  return (
    <footer className="bg-[#2C2C29] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-lg font-bold">Vallarismaps</div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          <li><a href="/map" className="hover:text-gray-400">Map</a></li>
        </ul>

        <div className="text-xs mt-4 md:mt-0">&copy; {new Date().getFullYear()} Vallarismaps. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
