import React from "react";
const TestTube_03: React.FC<
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
        d="M17 2.75h-1.75v4.165A8.252 8.252 0 0 1 12 22.75 8.25 8.25 0 0 1 8.75 6.915V2.75H7v-1.5h10zm-5.51 9.683c-1.75-1.518-3.265-2.054-4.398-2.178a5 5 0 0 0-.322-.025 6.76 6.76 0 0 1 2.978-2.096l.5-.177V2.75h3.5v5.207l.5.177a6.77 6.77 0 0 1 4.188 4.332c-.759.91-1.606 1.332-2.428 1.472a2 2 0 0 1-1.481 1.993l-.01.003a2 2 0 0 1-2.253-2.924 7 7 0 0 1-.774-.577m-1.747 4.603a1 1 0 1 0 .518 1.932l.009-.002a1 1 0 0 0-.518-1.932z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.036 14.26a1 1 0 0 1 .707-1.224l.01-.002a1 1 0 0 1 .517 1.932l-.009.002a1 1 0 0 1-1.225-.707"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube_03;
