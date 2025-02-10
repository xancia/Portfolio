import { Icon } from "@iconify/react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <Icon className="text-3xl" icon="mdi:linkedin" />
        </>
      ),
      href: "https://www.linkedin.com/in/cuong-ma/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <Icon className="text-3xl" icon="mdi:github-box" />
        </>
      ),
      href: "https://github.com/xancia",
    },
    {
      id: 3,
      child: (
        <>
          Mail <Icon className="text-3xl" icon="material-symbols:mail" />
        </>
      ),
      href: "mailto:cminhma@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume{" "}
          <Icon className="text-3xl" icon="material-symbols:lab-profile" />
        </>
      ),
      href: "/CUONG MA_.NET Engineers 2025.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
