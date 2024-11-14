import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-figma-common-bg w-full !font-montserrat">
      {/* footer top */}
      <div className="container grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 py-20 text-figma-dark">
        {/* footer logo */}
        <Link href="/" className="col-span-2">
          <Image
            src="/footer-logo.svg"
            alt="logo"
            loading="lazy"
            placeholder="blur"
            width={150}
            height={50}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </Link>

        {/* support */}
        <div className="lg:col-span-3">
          <h4 className="font-bold mb-7 capitalize">Support</h4>
          <div className="space-y-4 break-words">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        {/* account */}
        <div className="lg:col-span-2">
          <h4 className="font-bold mb-7 capitalize">Account</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/my-account">My Account</Link>
            </li>
            <li>
              <Link href="/register">Login/Register</Link>
            </li>
            <li>
              <Link href="/checkout">Cart</Link>
            </li>
            <li>
              <Link href="/shopping-cart">Shop</Link>
            </li>
          </ul>
        </div>
        {/* quick link */}
        <div className="lg:col-span-2">
          <h4 className="font-bold mb-7 capitalize">Quick Link</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/store-details">Store</Link>
            </li>
            <li>
              <Link href="/flat/our-service">Our Service</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/terms-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        {/* download app */}
        <div className="lg:col-span-3">
          <h4 className="font-bold mb-7 capitalize">Download App</h4>
          <div>
            <p className="text-figma-text">Install our apps free</p>
            <div className="flex gap-[10px]">
              {/* QR Code Image */}
              <Image
                src="/footer-qrcode1.png"
                alt="QR code for scanning the app"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
                width={76}
                height={76}
                style={{
                  maxWidth: "76px",
                  maxHeight: "76px",
                  objectFit: "cover",
                }}
              />

              <div className="flex flex-col items-center justify-center gap-1">
                {/* Google Play Store Image */}
                <Image
                  src="/GooglePlay.png"
                  alt="Google Play Store logo"
                  loading="lazy"
                  placeholder="blur"
                  width={76}
                  height={76}
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
                  style={{
                    maxWidth: "100px",
                    maxHeight: "30px",
                    objectFit: "cover",
                  }}
                />

                {/* App Store Image */}
                <Image
                  src="/AppStore.png"
                  alt="App Store logo"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8VA8AAmkBc7YFeIIAAAAASUVORK5CYII="
                  width={76}
                  height={76}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "30px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>

          {/* social link */}
          <ul className="flex gap-6 items-center mt-6">
            <li>
              <Link
                href="/"
                target="_blank"
                className="transition-colors duration-300 ease-linear hover:text-figma-primary"
              >
                <Facebook className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="transition-colors duration-300 ease-linear hover:text-figma-primary"
              >
                <Twitter className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="transition-colors duration-300 ease-linear hover:text-figma-primary"
              >
                <Instagram className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                target="_blank"
                className="transition-colors duration-300 ease-linear hover:text-figma-primary"
              >
                <Linkedin className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Separator />
      {/* footer bottom */}
      <p className="text-center py-4">
        &copy; Copyright nirmanmarket 2024. All right reserved
      </p>
    </footer>
  );
}
