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
        d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.316 6.052a1 1 0 0 1 .633 1.265l-2 6a1 1 0 0 1-1.898-.633l2-6a1 1 0 0 1 1.265-.632M8.707 7.293a1 1 0 0 1 0 1.414L7.414 10l1.293 1.293a1 1 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a1 1 0 0 1 1.414 0m6.586 0a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L16.586 10l-1.293-1.293a1 1 0 0 1 0-1.414M8.808 17h6.384l-.51 1.352c-.34.905-.185 1.982.301 2.628L15 21H17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2.001l.016-.02c.486-.646.641-1.723.3-2.628z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerProgramming_01;
