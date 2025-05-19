import React from "react";
const Twitter: React.FC<
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
        d="M12.113 9.009c-4 .333-7.604-2.873-8.688-4.88-.004-.008-.016-.006-.018.003-1.215 4.567.094 9.637 3.048 12.29-.196.23-1.726 2.122-4.446 2.14-.01 0-.014.013-.005.018 3.994 2.314 9.092 1.301 10.79.439 5.228-2.17 7.211-7.538 7.211-10.613L22 4.566a.01.01 0 0 0-.01-.015l-3.348.468c-4.107-3.001-7.099 1.324-6.53 3.99Z"
      />
    </svg>
  );
};
export default Twitter;
