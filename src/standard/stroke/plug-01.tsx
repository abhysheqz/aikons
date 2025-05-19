import React from "react";
const Plug_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2v4m-7 0V2M6 11.37V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.37a2 2 0 0 1-.361 1.147l-2.542 3.63A2 2 0 0 1 13.46 17H10.54a2 2 0 0 1-1.638-.853l-2.541-3.63A2 2 0 0 1 6 11.37M12 17v5M11 9h2"
      />
    </svg>
  );
};
export default Plug_01;
