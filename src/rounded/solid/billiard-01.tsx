import React from "react";
const Billiard_01: React.FC<
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
        d="M15.112 8.888a2.18 2.18 0 0 0-3.014-.065l-10.605 9.72a.75.75 0 1 0 1.014 1.107l8.038-7.37c.417-.013.713.119.91.298.187.17.329.425.38.751L4.35 21.493a.75.75 0 0 0 1.105 1.014l9.721-10.605a2.18 2.18 0 0 0-.065-3.014"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 9a7.75 7.75 0 1 1 6.728 7.683c-.423-.055-.634-.083-.696-.254s.09-.337.394-.669l2.607-2.844a3.68 3.68 0 0 0-5.199-5.199L8.24 10.324c-.332.304-.498.456-.669.394-.17-.062-.199-.273-.254-.696A8 8 0 0 1 7.25 9m11.186-2.505a.75.75 0 0 1 1.128-.99c1.078 1.23 1.42 3.165 1.031 4.68a.75.75 0 0 1-1.453-.37c.282-1.105.003-2.513-.706-3.32"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Billiard_01;
