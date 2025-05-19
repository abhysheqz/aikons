import React from "react";
const Airport: React.FC<
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
        d="m21.75 6-1.31 1.31v3.94h-1.5V8.81L17 10.75h-2.06v-1.5h1.439l1.5-1.5h-2.44v-1.5h3.94l1.31-1.31z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.565 12.5h6.87l2.315-4.05V7H2.25v1.45zM8.75 1.25v2h3v1.394l-.442 1.106H4.692L4.25 4.644V3.25h3v-2zM5.25 13.75h5.5v9h-5.5zM12 22.75h9.75v-8.5H12z"
      />
    </svg>
  );
};
export default Airport;
