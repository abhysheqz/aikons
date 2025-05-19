import React from "react";
const PlugSocket: React.FC<
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
        d="M16.805 2.789c.936-.158 1.897.17 2.573.846l.987.987c.675.676 1.004 1.637.846 2.573l-.122.725a7.24 7.24 0 0 1-1.617 3.495l-1.047 1.23c-.7.825-1.92.771-2.639.053l-4.483-4.484c-.719-.719-.773-1.94.051-2.64l1.231-1.046a7.24 7.24 0 0 1 3.495-1.617z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.207 1.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0M5.207 18.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.575 11.354c.7-.823 1.92-.77 2.639-.051l4.483 4.483c.719.719.773 1.94-.051 2.64l-1.231 1.046a7.24 7.24 0 0 1-3.495 1.617l-.725.122c-.936.158-1.897-.17-2.573-.846l-.987-.987c-.675-.676-1.004-1.637-.846-2.573l.122-.725a7.24 7.24 0 0 1 1.617-3.495z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.207 9.793a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0m1.586 3a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlugSocket;
