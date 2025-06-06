import React from "react";
const Bug_01: React.FC<
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
        d="m6 8.5-.04-.007A3.54 3.54 0 0 1 3 5M6 17.5l-.04.007A3.54 3.54 0 0 0 3 21M18 8.5l.04-.007A3.54 3.54 0 0 0 21 5M18 17.5l.04.007A3.54 3.54 0 0 1 21 21M12 21v-4.5M9.5 7V5.5a2.5 2.5 0 0 1 5 0V7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.002 10.107C5.94 8.41 7.325 7 9.056 7h5.888c1.73 0 3.116 1.41 3.054 3.107l-.196 5.397C17.69 18.57 15.126 21 12 21s-5.69-2.43-5.802-5.496z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 13H3M21 13h-3"
      />
    </svg>
  );
};
export default Bug_01;
