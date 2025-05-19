import React from "react";
const Wardrobe_04: React.FC<
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
        d="M3 20.25h8.25v-4h-9v3.25c0 .414.336.75.75.75m18-18.5h-8.25v18.5H21a.75.75 0 0 0 .75-.75v-17a.75.75 0 0 0-.75-.75m-18.75 13h9v-13H3a.75.75 0 0 0-.75.75zm7.5-7.25v3h-1.5v-3zm6 5v-3h-1.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_04;
