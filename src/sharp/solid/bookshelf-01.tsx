import React from "react";
const Bookshelf_01: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 22.25v-3h2v3zm14 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 11.75H2.25v7.75c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zm-.75-10H3a.75.75 0 0 0-.75.75v7.75h19.5V2.5a.75.75 0 0 0-.75-.75m-13.75 17h1.5v-4.647h-1.5zm5.5 0h-1.5v-4.647h1.5zm4.085 0h-1.53l.959-4.794 1.47.294zm-9.085-10h-1.5V4h1.5zm4.773 0h1.616l-1.943-4.856-1.392.557zm3.727 0h1.5V4h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookshelf_01;
