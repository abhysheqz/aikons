import React from "react";
const Briefcase_09: React.FC<
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
        d="M7 12v9m10-9v9M3 12h18M19.5 6h-15a2 2 0 0 0-2 2v11.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 6-.377-2.641a1 1 0 0 0-.99-.859H9.867a1 1 0 0 0-.99.859L8.5 6"
      />
    </svg>
  );
};
export default Briefcase_09;
