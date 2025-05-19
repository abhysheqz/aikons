import React from "react";
const Loading_03: React.FC<
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
        d="M11 6V2h2v4zM11 22v-4h2v4zM18 11h4v2h-4zM2 11h4v2H2zM15.535 7.051l2.828-2.828 1.415 1.414-2.829 2.828zM4.222 18.364l2.829-2.829 1.414 1.414-2.828 2.829zM16.95 15.535l2.828 2.829-1.415 1.414-2.828-2.829zM5.637 4.223 8.465 7.05 7.051 8.465 4.223 5.637z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loading_03;
