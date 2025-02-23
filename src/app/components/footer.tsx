import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-400 font-inter">
          <Link href="/">
            Designed and built by
            <span className="mt-2 font-bold"> Daniel Mwamba</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
