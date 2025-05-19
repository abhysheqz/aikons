import React from "react";
const Domino: React.FC<
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
        d="M19.747 12.75V22a.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75v-9.25zm-11.254 3h2.01v2h-2.01zm4.999 2h2.009v2h-2.009zM4.997 1.25a.75.75 0 0 0-.75.75v9.25h15.5V2a.75.75 0 0 0-.75-.75zm5.991 6h2.01v-2h-2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Domino;
