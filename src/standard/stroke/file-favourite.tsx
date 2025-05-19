import React from "react";
const FileFavourite: React.FC<
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
        d="M15 2h3a2 2 0 0 1 2 2v11.015L12.999 22H6a2 2 0 0 1-2-2V11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 15h-5a2 2 0 0 0-2 2v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.743 2.29C9.146 1.457 8 2.684 8 2.684S6.854 1.457 5.257 2.29C3.323 3.298 3.184 7.247 8 9c4.816-1.753 4.677-5.702 2.743-6.71"
      />
    </svg>
  );
};
export default FileFavourite;
