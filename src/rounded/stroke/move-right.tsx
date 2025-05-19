import React from "react";
const MoveRight: React.FC<
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
      <circle cx={5} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 12H12m10 0c0 .562-.438.99-1.314 1.844L19.029 15.5M22 12c0-.562-.438-.99-1.314-1.844L19.03 8.5"
      />
    </svg>
  );
};
export default MoveRight;
