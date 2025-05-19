import React from "react";
const Cancel_02: React.FC<
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
        d="M12.012 9.163 6.839 4.011 4 6.85l5.173 5.152-5.152 5.157L6.86 20l5.152-5.157 5.131 5.155 2.84-2.84-5.133-5.155L20 6.84 17.161 4z"
      />
    </svg>
  );
};
export default Cancel_02;
