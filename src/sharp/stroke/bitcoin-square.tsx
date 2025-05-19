import React from "react";
const BitcoinSquare: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 8.286h4.139a1.857 1.857 0 0 1 0 3.714H9zM9.002 12h4.139a1.857 1.857 0 0 1 0 3.714H9.002zM10.512 6.5v1.203m0 8.566V17.5m2.375-11 .012 1.122m-.012 8.647.023 1.277"
      />
    </svg>
  );
};
export default BitcoinSquare;
