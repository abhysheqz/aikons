import React from "react";
const Matches: React.FC<
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
        d="M19 8H5v14h14zM18 8V2H6v6M12 8V4M9 8V4M15 8V4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.154 19C13.726 19 15 17.746 15 16.2c0-2.295-2.44-2.8-2.44-5.2-1.828 1-1.56 4-1.56 4l-1.69-1.5c-.948 2.5.357 5.5 2.844 5.5Z"
      />
    </svg>
  );
};
export default Matches;
