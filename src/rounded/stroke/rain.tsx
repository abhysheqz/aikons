import React from "react";
const Rain: React.FC<
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
        strokeWidth={1.5}
        d="M3 7.671C3 5.998 4.474 4.344 5.51 3.39a1.456 1.456 0 0 1 1.98 0C8.527 4.344 10 5.998 10 7.67 10 9.312 8.675 11 6.5 11S3 9.312 3 7.671ZM8.5 17.671c0-1.673 1.474-3.327 2.51-4.282a1.456 1.456 0 0 1 1.98 0c1.036.955 2.51 2.609 2.51 4.282C15.5 19.312 14.175 21 12 21s-3.5-1.688-3.5-3.329ZM14 7.671c0-1.673 1.474-3.327 2.51-4.282a1.456 1.456 0 0 1 1.98 0C19.527 4.344 21 5.998 21 7.67 21 9.312 19.675 11 17.5 11S14 9.312 14 7.671Z"
      />
    </svg>
  );
};
export default Rain;
