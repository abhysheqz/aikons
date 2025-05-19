import React from "react";
const Tree_07: React.FC<
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
        strokeWidth={1.5}
        d="M8 7c1.14.631 2.517 1 4 1s2.86-.369 4-1l-4-5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.8 7.5 3.2 4c-1.71.947-3.776 1.5-6 1.5s-4.29-.553-6-1.5l3.2-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.404 12.291 19 15.999c-1.996 1.263-4.405 2-7 2s-5.004-.737-7-2l2.596-3.708"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22v-4m-2 4h4"
      />
    </svg>
  );
};
export default Tree_07;
