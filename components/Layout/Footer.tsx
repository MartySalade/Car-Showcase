import { footerLinks } from "@/data";
import Image from "next/image";

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { title: string; url: string }[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">{title}</h3>
      {links.map((link, index) => (
        <a href={link.url} key={index} className="text-grey">
          {link.title}
        </a>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 flex-around w-full">
      <div className="flex flex-wrap w-full justify-between gap-8">
        <div className="flex flex-col gap-2">
          <Image src="/assets/logos/logo.svg" alt="" width={120} height={50} />
          <p className="text-grey">
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        {footerLinks.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
      <div className="flex-between text-sm">
        <p className="text-grey">@2023 Carhub. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/" className="text-grey">
            Privacy & Policy
          </a>
          <a href="/" className="text-grey">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
