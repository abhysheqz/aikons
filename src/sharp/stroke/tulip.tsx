import React from "react";
const Tulip: React.FC<
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
        d="M12 21a6 6 0 0 1 6-6M12 21a6 6 0 0 0-6-6M12 13v9M12 13a5 5 0 0 0 5-5V4a5 5 0 0 0-5 5M14.5 4.5C14 3 12 2 12 2s-2 1-2.5 2.5M12 13a5 5 0 0 1-5-5V4c1.363 0 2.598.545 3.5 1.43"
      />
    </svg>
  );
};
export default Tulip;
