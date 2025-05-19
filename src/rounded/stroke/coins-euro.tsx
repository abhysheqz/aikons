import React from "react";
const CoinsEuro: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM3.157 11A7.111 7.111 0 0 0 13 20.843"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 12.492c-.478.904-1.349 1.508-2.343 1.508-1.51 0-2.734-1.393-2.734-3.111V9.11C11.923 7.393 13.147 6 14.657 6c.994 0 1.865.604 2.343 1.508M11 10h3.923"
      />
    </svg>
  );
};
export default CoinsEuro;
