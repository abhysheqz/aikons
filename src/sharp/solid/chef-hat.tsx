import React from "react";
const ChefHat: React.FC<
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
        d="M12 3.25c-1.764 0-3.302.96-4.12 2.386a4.75 4.75 0 1 0-2.63 9.055v.809h13.5v-.809a4.751 4.751 0 1 0-2.63-9.055A4.75 4.75 0 0 0 12 3.25M18.75 17.5H5.25v3.25h13.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 20.75H3v-2h18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChefHat;
