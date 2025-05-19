import React from "react";
const Podium: React.FC<
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
        d="M9.5 13.997h-4L4 5.999h16l-1.5 7.998h-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 6 1-4h2m9 4-1-4h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.218 11.997.786 6.477H8.486l-1.4 3.389A.1.1 0 0 0 7.18 22h9.667a.1.1 0 0 0 .092-.14l-1.458-3.387h-1.497l.739-6.478"
      />
    </svg>
  );
};
export default Podium;
