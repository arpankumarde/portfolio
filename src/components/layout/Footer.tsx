import profile from "@/data/profile";

const Footer = () => {
  return (
    <footer className="text-center text-zinc-500 py-8">
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
