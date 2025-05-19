import React from "react";
const Blockchain_05: React.FC<
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
        d="M12 9.5v7.15m0-7.15L5.845 5.95M12 9.5l6.155-3.55M12 2l6.5 3.75v7.5L12 17l-6.5-3.75v-7.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 20.75H5m9 0h5M10 22h4v-2.5h-4z"
      />
    </svg>
  );
};
export default Blockchain_05;
