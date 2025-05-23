import React from "react";
const FileStar: React.FC<
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
        d="M20 13V9l-7-7H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 2v5a2 2 0 0 0 2 2h5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.509 14.822a.536.536 0 0 1 .982 0l.842 1.977 2.176.17a.522.522 0 0 1 .303.921l-1.655 1.386.506 2.076c.111.453-.389.812-.793.57L16 20.807l-1.87 1.115c-.404.242-.904-.117-.794-.57l.507-2.076-1.655-1.386a.522.522 0 0 1 .303-.92l2.176-.171z"
      />
    </svg>
  );
};
export default FileStar;
