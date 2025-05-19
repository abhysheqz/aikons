import React from "react";
const Medal_01: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5a1 1 0 0 1-.594.914l-7.36 3.27 2.29 1.145a.75.75 0 0 1 .414.671v5a.75.75 0 0 1-.415.67l-4 2a.75.75 0 0 1-.67 0l-4-2A.75.75 0 0 1 7.25 19v-5a.75.75 0 0 1 .415-.67l2.288-1.145-7.36-3.271A1 1 0 0 1 2 8zm2 1v3.35l3.75 1.667V4zm12.25 0v5.017L20 7.35V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_01;
