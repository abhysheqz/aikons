import React from "react";
const Moonset: React.FC<
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
        d="M19.5 3v5.45M22 6.5 19.5 9 17 6.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.75 18A8.3 8.3 0 0 0 18 15.322c-2.3.303-4.653-.844-5.884-3.108a6.63 6.63 0 0 1 .406-6.964 7.23 7.23 0 0 0-5.699.838c-3.656 2.24-4.908 7.203-2.798 11.084q.237.435.516.828M2 21h20"
      />
    </svg>
  );
};
export default Moonset;
