import React from "react";
const House_02: React.FC<
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
        d="M23 21.75H1v-1.5h22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 10.75v11H2.25v-11h6.527L12 7.988l3.223 2.762zm-.255-1.5-3-7H5.504l-3 7h5.718L12 6.012l3.777 3.238zM13.008 13h-2v-2h2zM9.5 15.25a.75.75 0 0 0-.75.75v5.75h1.5v-5h3.5v5h1.5V16a.75.75 0 0 0-.75-.75zm-3-.5h-2v-1.5h2zm11 0h2v-1.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default House_02;
