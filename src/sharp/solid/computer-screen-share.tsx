import React from "react";
const ComputerScreenShare: React.FC<
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
        d="M10.5 15.75h3v3.5a.5.5 0 0 0 .5.5h3v2H7v-2h3a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 2.25H1.25v15.5h21.5zM12.086 12l1.414 1.414L17.414 9.5 13.5 5.586 12.086 7l1.5 1.5H11a3 3 0 0 0-3 3V14h2v-2.5a1 1 0 0 1 1-1h2.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerScreenShare;
