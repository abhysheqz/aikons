import React from "react";
const Location_08: React.FC<
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
        d="M12 1.25c-4.267 0-7.75 3.398-7.75 7.619 0 2.275 1.055 3.97 2.336 5.405.593.665 1.252 1.293 1.886 1.898l.135.128c.684.653 1.336 1.284 1.906 1.952.76.893 2.211.923 2.996.031.576-.654 1.225-1.28 1.903-1.934l.025-.024c.678-.653 1.382-1.334 2.012-2.059 1.267-1.456 2.301-3.165 2.301-5.397 0-4.221-3.483-7.619-7.75-7.619M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.872 16.072a1 1 0 0 1 .557 1.3L4.98 21h13.984l-1.375-3.094a1 1 0 0 1 1.828-.812l1.375 3.094A2 2 0 0 1 18.963 23H4.979a2 2 0 0 1-1.858-2.742l1.451-3.629a1 1 0 0 1 1.3-.557"
      />
    </svg>
  );
};
export default Location_08;
