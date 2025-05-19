import React from "react";
const MoveTop: React.FC<
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
      <circle
        cx={3}
        cy={3}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        transform="matrix(0 -1 -1 0 15 22)"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12.003 12V2.192m3.5 2.778L12.003 2l-3.5 2.97"
      />
    </svg>
  );
};
export default MoveTop;
