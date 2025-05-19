import React from "react";
const Briefcase_02: React.FC<
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
        d="M20.5 6h-17a1 1 0 0 0-1 1v3.267a1 1 0 0 0 .699.954l8.5 2.684a1 1 0 0 0 .602 0l8.5-2.684a1 1 0 0 0 .699-.954V7a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 11.5v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8M15.5 6l-.378-2.641a1 1 0 0 0-.99-.859H9.868a1 1 0 0 0-.99.859L8.5 6"
      />
    </svg>
  );
};
export default Briefcase_02;
