import React from "react";
const Behance_01: React.FC<
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
        d="M1 4h6.4C9.914 4 12 5.988 12 8.5c0 1.424-.67 2.68-1.709 3.5A4.45 4.45 0 0 1 12 15.5c0 2.512-2.086 4.5-4.6 4.5H1zm6.4 7C8.863 11 10 9.854 10 8.5S8.863 6 7.4 6H3v5zM3 13h4.4c1.463 0 2.6 1.146 2.6 2.5S8.863 18 7.4 18H3zM16 6h4v2h-4zm-3 8c0-2.566 2.212-5 5-5s5 2.434 5 5a1 1 0 0 1-1 1h-7a3 3 0 0 0 5.6 1.5l1.73 1A5 5 0 0 1 13 15zm2.195-1h5.61c-.433-1.108-1.54-2-2.805-2-1.264 0-2.372.892-2.805 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Behance_01;
