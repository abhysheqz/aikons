import React from "react";
const Bookshelf_03: React.FC<
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
        d="M3 1.25h18a.75.75 0 0 1 .75.75v20.75H2.25V2A.75.75 0 0 1 3 1.25m17.25 8.5H3.75v5.5h16.5zm-15-1.643h1.5V4h-1.5zm5.46 0H9.165l-.892-3.925 1.456-.364zm3.04 0h-1.5V4h1.5zM10.5 19.75h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M23 22.75H1v-2h22zM15.728 12.182l-1 4-1.456-.364 1-4zM11.75 12v4h-1.5v-4zm7 0v4h-1.5v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bookshelf_03;
