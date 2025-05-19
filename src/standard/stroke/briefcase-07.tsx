import React from "react";
const Briefcase_07: React.FC<
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
        d="m21 15-.358 4.653a2 2 0 0 1-1.994 1.847H5.352a2 2 0 0 1-1.994-1.847L3 15"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.377-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.5 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 7v3c1.5 3 5.446 5.044 9.5 5 4.054.044 8-2 9.5-5V7a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1Z"
      />
    </svg>
  );
};
export default Briefcase_07;
