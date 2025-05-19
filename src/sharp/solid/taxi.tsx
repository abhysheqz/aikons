import React from "react";
const Taxi: React.FC<
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
        d="M8.5 2v3.25h7V2zM2.5 22v-2h4v2zM17.5 22v-2h4v2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.136 4.5a.975.975 0 0 0-.948.732l-1.411 5.586-2.3 2.73a.96.96 0 0 0-.227.618v3.867c0 .534.438.967.977.967h19.546c.54 0 .977-.433.977-.967v-3.867a.96.96 0 0 0-.227-.619l-2.3-2.73-1.411-5.585a.975.975 0 0 0-.948-.732zM17.1 6.434l.978 3.866H5.922l.977-3.866zM5 15.5H3V14h2zm14 0h2V14h-2zM9.5 15h5l.875 2h-6.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.624 10.03-2.5 2-1.249-1.561 2.5-2zM2.624 8.469l2.5 2-1.249 1.562-2.5-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Taxi;
