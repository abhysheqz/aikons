import React from "react";
const Link_05: React.FC<
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
        d="M7 8a4 4 0 1 0 0 8h3.5v2H7A6 6 0 0 1 7 6h3.5v2zm10 0h-3.5V6H17a6 6 0 0 1 0 12h-3.5v-2H17a4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 13H8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_05;
