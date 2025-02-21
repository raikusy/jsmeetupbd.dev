const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} JavaScript Meetup Bangladesh. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
