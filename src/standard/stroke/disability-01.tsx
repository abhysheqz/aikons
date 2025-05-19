import React from "react";
const Disability_01: React.FC<
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
        d="M19.5 18h-1.434a1 1 0 0 1-.857-.485l-.918-1.53a1 1 0 0 0-.857-.485H12.5v-5m0-2.5v2.5m0 0H17M12.5 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.558 10c-2.87.48-5.058 2.964-5.058 5.958C4.5 19.295 7.217 22 10.57 22a6.07 6.07 0 0 0 4.93-2.517"
      />
    </svg>
  );
};
export default Disability_01;
