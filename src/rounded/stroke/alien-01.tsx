import React from "react";
const Alien_01: React.FC<
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
        d="M7.333 10H6.5a.5.5 0 0 0-.5.5v.833A2.667 2.667 0 0 0 8.667 14H9.5a.5.5 0 0 0 .5-.5v-.833A2.667 2.667 0 0 0 7.333 10ZM16.667 10H17c.471 0 .707 0 .854.146.146.147.146.383.146.854v.333A2.667 2.667 0 0 1 15.333 14H15c-.471 0-.707 0-.854-.146C14 13.707 14 13.47 14 13v-.333A2.667 2.667 0 0 1 16.667 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 18h2M21 11c0 5.523-6 11-9 11s-9-5.477-9-11 4.03-9 9-9 9 3.477 9 9"
      />
    </svg>
  );
};
export default Alien_01;
