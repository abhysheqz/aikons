import React from "react";
const Detergent: React.FC<
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
        d="M12.5 4.5h-4V4c0-.943 0-1.414.293-1.707S9.557 2 10.5 2s1.414 0 1.707.293.293.764.293 1.707zM18 18v-7.477A6.05 6.05 0 0 0 12.5 4.5h-4v.13a5 5 0 0 1-.726 2.531l-.069.111-.341.546c-.448.717-.672 1.075-.842 1.455a6 6 0 0 0-.465 1.62C6 11.306 6 11.729 6 12.574V18c0 1.886 0 2.828.586 3.414S8.114 22 10 22h4c1.886 0 2.828 0 3.414-.586S18 19.886 18 18Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.011 8.514c.67 1.174.649 2.455-.048 2.862-.696.406-1.804-.216-2.474-1.39s-.649-2.455.048-2.861c.696-.407 1.804.215 2.474 1.389Z"
      />
    </svg>
  );
};
export default Detergent;
