import React from "react";
const PointingRight_03: React.FC<
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
        d="M8.469 5.783a2.49 2.49 0 0 1 3.43 3.576l-.768.896h8.119a2.5 2.5 0 0 1 0 5h-4.978V19a3.75 3.75 0 0 1-3.75 3.75H5A3.75 3.75 0 0 1 1.25 19v-8a.75.75 0 0 1 .334-.624z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.543 1.25 3.207 3.207-3.207 3.207-1.414-1.414.793-.793h-3.586v-2h3.586l-.793-.793z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_03;
