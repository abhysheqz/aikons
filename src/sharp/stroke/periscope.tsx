import React from "react";
const Periscope: React.FC<
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
        d="M12 2c4.418 0 8 3.618 8 8.08 0 2.553-1 3.92-3 6.309L12 22l-5-5.611C5 14 4 12.633 4 10.081 4 5.618 7.582 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 14a4 4 0 1 0-.479-7.972 2.5 2.5 0 0 1-3.493 3.493A4 4 0 0 0 12 14Z"
      />
    </svg>
  );
};
export default Periscope;
