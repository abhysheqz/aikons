import React from "react";
const AiDna: React.FC<
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
        strokeWidth={1.5}
        d="M7.5 14C3 11.6 3 10.4 3 10s0-1.6 4.5-4m0 8C3 16.4 3 17.2 3 18m4.5-4c4.5-2.4 4.5-3.6 4.5-4s0-1.6-4.5-4M12 2c0 .8 0 1.6-4.5 4m0 0L5.313 4.744C3 3.281 3 2.641 3 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19 14h-6v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 20v2m3-2v2m-3-10v2m3-2v2M13 15.5h-2m2 3h-2m10-3h-2m2 3h-2"
      />
    </svg>
  );
};
export default AiDna;
