import React from "react";
const Baby_01: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 16c-.716.632-1.576 1-2.5 1s-1.784-.368-2.5-1M9 11.5a2.52 2.52 0 0 0-1.5-.5 2.52 2.52 0 0 0-1.5.5M18 11.5a2.52 2.52 0 0 0-1.5-.5 2.52 2.52 0 0 0-1.5.5M12 2a3 3 0 1 0 2 5.236"
      />
    </svg>
  );
};
export default Baby_01;
