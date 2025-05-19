import React from "react";
const Health: React.FC<
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
        d="m11.979 3.901.02.018.02-.018a7.3 7.3 0 0 1 1.588-1.043c1.385-.664 3.357-1.017 5.605.191 2.727 1.465 4.092 4.934 3.323 8.538-.777 3.645-3.707 7.436-9.547 9.83a2.62 2.62 0 0 1-1.978 0c-5.84-2.395-8.77-6.185-9.547-9.83-.77-3.604.596-7.073 3.323-8.538 2.248-1.208 4.22-.855 5.605-.191.682.327 1.22.727 1.588 1.043M13 9a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Health;
