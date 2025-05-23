import React from "react";
const Tags: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.495 10c.841-.56 1.588-1.457 2.052-2.573.958-2.305.347-4.67-1.363-5.281-1.711-.612-3.875.76-4.833 3.065A6 6 0 0 0 10 6.364"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20v-9.434a1 1 0 0 1 .486-.857L14 7.6M10 20v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V10.566a1 1 0 0 0-.485-.857l-4-2.4a1 1 0 0 0-1.03 0L14 7.6M10 20l-4.92-.82a1 1 0 0 1-.804-1.239l2.578-9.88a1 1 0 0 1 .704-.713l4.361-1.19a1 1 0 0 1 .993.281L14 7.6"
      />
    </svg>
  );
};
export default Tags;
