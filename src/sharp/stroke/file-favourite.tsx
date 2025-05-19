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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M13 21.5V15h6.5M15 2h5v13l-7 7H4V11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10.743 2.29C9.146 1.457 8 2.684 8 2.684S6.854 1.457 5.257 2.29C3.323 3.298 3.184 7.247 8 9c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default FileFavourite;
