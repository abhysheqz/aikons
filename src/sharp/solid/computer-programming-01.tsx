import React from "react";
const ComputerProgramming_01: React.FC<
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
        fillRule="evenodd"
        d="m10.03 13.758 2-8 1.94.485-2 8zM8.293 6.293l1.414 1.414L7.414 10l2.293 2.293-1.414 1.415L4.586 10zM16.586 10l-2.293-2.293 1.414-1.414L19.414 10l-3.707 3.707-1.414-1.414z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M14.5 20.25H17v2H7v-2h2.5V17.5h5z" />
    </svg>
  );
};
export default ComputerProgramming_01;
