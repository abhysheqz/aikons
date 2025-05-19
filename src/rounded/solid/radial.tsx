import React from "react";
const Radial: React.FC<
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
        d="M11 2a1 1 0 0 1 1-1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12c0-1.988.528-3.855 1.452-5.466a1 1 0 0 1 1.735.995A8.95 8.95 0 0 0 3 12a9 9 0 1 0 9-9 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 5.25a1 1 0 0 1 1-1A7.75 7.75 0 1 1 4.25 12a1 1 0 1 1 2 0A5.75 5.75 0 1 0 12 6.25a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 9a1 1 0 0 1 1-1 4 4 0 0 1 0 8 1 1 0 1 1 0-2 2 2 0 1 0 0-4 1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Radial;
