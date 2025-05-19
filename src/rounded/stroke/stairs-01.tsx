import React from "react";
const Stairs_01: React.FC<
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
        d="M17.5 3.5h1c.943 0 1.414 0 1.707.293s.293.764.293 1.707v11c0 1.886 0 2.828-.586 3.414s-1.528.586-3.414.586h-11c-.943 0-1.414 0-1.707-.293S3.5 19.443 3.5 18.5v-1c0-.943 0-1.414.293-1.707S4.557 15.5 5.5 15.5h2v-2c0-.943 0-1.414.293-1.707S8.557 11.5 9.5 11.5h2v-2c0-.943 0-1.414.293-1.707S12.557 7.5 13.5 7.5h2v-2c0-.943 0-1.414.293-1.707S16.557 3.5 17.5 3.5Z"
      />
    </svg>
  );
};
export default Stairs_01;
