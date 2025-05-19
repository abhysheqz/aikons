import React from "react";
const Zzz: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 16h4v.5l-4 3v.5h4M4 4h7v.5l-7 7v.5h7M14 9h6v.5l-6 5v.5h6"
      />
    </svg>
  );
};
export default Zzz;
