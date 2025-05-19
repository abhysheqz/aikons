import React from "react";
const ChessPawn: React.FC<
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
        d="M9.5 10c0 3-.5 6-2.5 8m7.5-8c0 3 .5 6 2.5 8M12 2a3.5 3.5 0 0 0-2.724 5.698A.87.87 0 0 0 9.96 8h4.082a.87.87 0 0 0 .683-.302A3.5 3.5 0 0 0 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10h8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 22h-15v-2l.447-.894A2 2 0 0 1 6.737 18h10.527a2 2 0 0 1 1.789 1.106L19.5 20z"
      />
    </svg>
  );
};
export default ChessPawn;
