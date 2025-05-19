import React from "react";
const Uv_02: React.FC<
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
        d="m16.596 6.49 1.767-1.768 1.415 1.414-1.768 1.768zM11 5V2.5h2V5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 13.25H6.25v-.75a5.75 5.75 0 1 1 11.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 11.5H22v2h-2.5zM2 11.5h2.5v2H2zM5.637 4.721 7.404 6.49 5.99 7.903 4.222 6.136zM7 19.5v-4H5v5a1 1 0 0 0 1 1h5v-6H9v4zM15.5 19.058l1.572-3.93 1.857.744-2.251 5.628h-2.354l-2.252-5.628 1.857-.743z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Uv_02;
