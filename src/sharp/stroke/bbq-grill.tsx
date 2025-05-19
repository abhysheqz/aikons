import React from "react";
const BbqGrill: React.FC<
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
        d="M12 2v4M15.5 2v4M8.5 2v4M9 15l-3 7m9-7 3 7m-6-7v7m-4.5-3h9M12 15a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7ZM19 10h2M5 10H3"
      />
    </svg>
  );
};
export default BbqGrill;
