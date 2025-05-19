import React from "react";
const ComputerVideoCall: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2.72c0-.535.438-.97.977-.97h19.546c.54 0 .977.435.977.97v14.56c0 .535-.437.97-.977.97H2.227a.974.974 0 0 1-.977-.97zm1.955.971V16.31h17.59V3.69z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 20.25H7v2h10v-2h-3V17.5h-4zM9.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        d="M7.388 13.567c2.121-2.995 7.035-3.185 9.23.008A.75.75 0 0 1 16 14.75H8a.75.75 0 0 1-.612-1.183"
      />
    </svg>
  );
};
export default ComputerVideoCall;
