import React from "react";
const Wardrobe_03: React.FC<
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
        d="M5 22.25v-3h2v3zm12 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.75 16.25v3.25a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-3.25zM2.25 2.5A.75.75 0 0 1 3 1.75h8.25v13h-9zM21 1.75h-8.25v13h9V2.5a.75.75 0 0 0-.75-.75m-11.25 5v3h-1.5v-3zm6 3v-3h-1.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_03;
