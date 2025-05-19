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
        d="M16.5 4.5v5M3 7c0 3.251 2.8 5.637 5.691 4.848 2.307-.629 5.513-2.268 7.933-2.046C17.501 9.882 19 11 19 11a5 5 0 0 0 2-4 5 5 0 0 0-2-4s-1.5 1.118-2.376 1.198c-2.42.222-5.626-1.417-7.933-2.046C5.801 1.363 3 3.749 3 7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v3H4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.578 11.57C6.748 12.9 7 16.6 7 19h3l1.497-2.994a.01.01 0 0 0-.001-.011c-.59-.689-1.382-1.945-1.496-4.121"
      />
    </svg>
  );
};
export default HairDryer;
