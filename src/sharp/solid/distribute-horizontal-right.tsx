import React from "react";
const DistributeHorizontalRight: React.FC<
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
        d="M9 22V2h2v20zM20 22V2h2v20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.5 16.004a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zM2.5 19a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5z"
      />
    </svg>
  );
};
export default DistributeHorizontalRight;
