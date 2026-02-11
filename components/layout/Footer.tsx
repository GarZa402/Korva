import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-[0.2em] uppercase text-white mb-6 block"
            >
              Chronos<span className="text-[#D4AF37]">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Redefining luxury since 1982. Every timepiece tells a story of
              precision, heritage, and timeless elegance.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#020617] transition-all"
              >
                <span className="text-xs">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#020617] transition-all"
              >
                <span className="text-xs">FB</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-[#020617] transition-all"
              >
                <span className="text-xs">YT</span>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Shop
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Classic Series
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Sport Series
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Smart Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Warranty Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Service Centers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Flagship Store Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Flagship Store
            </h4>
            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4vEmGNr45ZsXM_A1HjqXrbgS4ogfu6KcOJQ7u60jUQKpMzchdB6ehP7EthCgkgl887raFVByEx4RpuhrZaTak28g9brwxgG_rV5lpTCYXAuDKdaZFE6yViezwfJFLctbG35rgAcSMgo4WD1282RbkWDbm0ZqbpzjPdTar5d0eUezkG-2thTpgjgZNtztUDT5_SBOfxpJqOlTFsazLHTLuVcNuEDi_bMsNFtyUSrzvVLAsrnJz3wWnXQG48VJgnPjw6zVIrYRnoJQ"
                alt="Minimalist luxury storefront interior"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-gray-400 text-sm mb-2">152 Bond Street</p>
            <p className="text-gray-400 text-sm">London, W1S 2TF, UK</p>
            <a
              href="#"
              className="text-[#D4AF37] text-sm mt-4 inline-block hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © 2024 Chronos Luxe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
              Cookies Settings
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-600">
            Desarrollado por:{" "}
            <a
              href="https://juanjosegarcia.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#F1E2C3] transition-colors"
            >
              Juan José García
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
