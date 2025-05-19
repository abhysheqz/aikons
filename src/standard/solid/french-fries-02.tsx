import React from "react";
const FrenchFries_02: React.FC<
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
        d="M9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0V2.75h-2.5V13a.75.75 0 0 1-1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.283 4.282a.75.75 0 0 1 .59.067l3.5 2a.75.75 0 0 1 .298.986l-1.5 3a.75.75 0 1 1-1.342-.67l1.183-2.366-2.196-1.254-2.145 4.29a.75.75 0 1 1-1.342-.67l2.5-5a.75.75 0 0 1 .454-.383M6.628 2.349a.75.75 0 0 1 1.015.265l3 5a.75.75 0 1 1-1.286.772l-2.622-4.37-2.206 1.26 3.119 5.346-1.296.756-3.5-6a.75.75 0 0 1 .276-1.03z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 9.25a.75.75 0 0 0-.728.932l2.622 10.485a2.75 2.75 0 0 0 2.668 2.083h8.877a2.75 2.75 0 0 0 2.667-2.083l2.622-10.485A.75.75 0 0 0 21 9.25c-2.644 0-4.292.732-5.31 1.668a4.75 4.75 0 0 0-1.24 1.832h-4.9a4.75 4.75 0 0 0-1.24-1.832C7.292 9.982 5.644 9.25 3 9.25m9 6.5a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FrenchFries_02;
