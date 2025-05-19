import React from "react";
const ComputerProgramming_02: React.FC<
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
        d="M5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 1 1 2 0v5a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h9a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14.5 22-.316-.419c-.71-.944-.887-2.387-.437-3.581M9.5 22l.316-.419c.71-.944.887-2.387.437-3.581"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 22h10"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.808 17h6.384l-.51 1.352c-.34.905-.185 1.982.301 2.628L15 21H17a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2.001l.016-.02c.486-.646.641-1.723.3-2.628zM18.97 1.481a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.061l-5.5 5.5a.75.75 0 0 1-.53.22H14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .22-.53z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 9.762a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerProgramming_02;
