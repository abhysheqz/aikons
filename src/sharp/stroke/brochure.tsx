import React from "react";
const Brochure: React.FC<
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
        d="M18.5 3h-13v18h13zM18.5 6H22v13h-3.5M5.5 6H2v13h3.5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 8H9m6 4H9m6 4H9" />
    </svg>
  );
};
export default Brochure;
