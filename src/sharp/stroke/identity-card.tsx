import React from "react";
const IdentityCard: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 3.5H2v17h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M5 16c1.036-2.581 4.896-2.75 6 0M9.75 9.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM14 8.5h5M14 12h5m-5 3.5h2.5"
      />
    </svg>
  );
};
export default IdentityCard;
