import React from "react";
const DistributeVerticalBottom: React.FC<
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
        d="M22 22H2v-2h20zM22 11H2V9h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.003 6.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5zM19 17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z"
      />
    </svg>
  );
};
export default DistributeVerticalBottom;
