import React from "react";
const Mentoring: React.FC<
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
        d="M4.002 13.5v-5h8.008v5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.016 13a2.001 2.001 0 1 1-4.002-.002 2.001 2.001 0 0 1 4.002.002ZM10.008 4a2 2 0 1 1-4.002-.002A2 2 0 0 1 10.008 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.51 17.5h8.508V22h-4.004"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.03 21.995h-3.954m0 0h-8.11a.01.01 0 0 1-.01-.007l-1.934-5.936a.01.01 0 0 1 .01-.013h7.965a.01.01 0 0 1 .01.007z"
      />
    </svg>
  );
};
export default Mentoring;
