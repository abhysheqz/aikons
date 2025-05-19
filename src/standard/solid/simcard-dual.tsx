import React from "react";
const SimcardDual: React.FC<
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
        d="M1.252 8a2.75 2.75 0 0 1 2.75-2.75h5.786c.635 0 1.25.22 1.741.622l4.214 3.447a2.75 2.75 0 0 1 1.009 2.129V20a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 1.252 20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.26 3.75h.65c.634 0 1.25.22 1.741.622l5.589 4.573a2.75 2.75 0 0 1 1.009 2.128v5.677h1.75a2.75 2.75 0 0 0 2.75-2.75V6.898a2.75 2.75 0 0 0-.923-2.055l-3.26-2.898a2.75 2.75 0 0 0-1.828-.695h-4.74a2.75 2.75 0 0 0-2.738 2.5"
      />
    </svg>
  );
};
export default SimcardDual;
