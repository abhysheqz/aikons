import React from "react";
const Cherry: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M10.5 11c-.878-.63-1.948-1-3.104-1C4.416 10 2 12.462 2 15.5S4.416 21 7.396 21c.693 0 1.355-.133 1.963-.375"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 13c-1.837-1.896-4.27-5.863-2.205-9M16 2c-1.015.599-1.73 1.278-2.205 2m0 0c-2.394.5-7.704 2.5-6.66 8"
      />
    </svg>
  );
};
export default Cherry;
