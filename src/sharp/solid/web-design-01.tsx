import React from "react";
const WebDesign_01: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v5.25H2.25zm5.759 1.25H6v2h2.009zm4 0H10v2h2.009zM9.75 9.75h12V21a.75.75 0 0 1-.75.75H9.75zM19 14.5h-6V13h6zm-3 4h-3V17h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.25 9.75h-6V21c0 .414.336.75.75.75h5.25z"
      />
    </svg>
  );
};
export default WebDesign_01;
