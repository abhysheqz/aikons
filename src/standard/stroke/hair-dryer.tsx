import React from "react";
const HairDryer: React.FC<
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
        d="M16.5 4.5v5M3 7c0 3.251 2.8 5.637 5.691 4.848 2.307-.629 5.513-2.268 7.933-2.046C17.501 9.882 19 11 19 11a5 5 0 0 0 2-4 5 5 0 0 0-2-4s-1.5 1.118-2.376 1.198c-2.42.222-5.626-1.417-7.933-2.046C5.801 1.363 3 3.749 3 7M9 19.5V21a1 1 0 0 1-1 1H4.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 11.5C7 13 7 17 7 19.5h3l1.495-3.027a.01.01 0 0 0-.002-.011c-.598-.698-1.396-2.27-1.511-4.462"
      />
    </svg>
  );
};
export default HairDryer;
