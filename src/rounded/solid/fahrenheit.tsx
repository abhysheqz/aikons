import React from "react";
const Fahrenheit: React.FC<
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
        d="M5.5 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.5 3h-3.07c-1.355 0-2.471 0-3.355.119-.928.124-1.747.396-2.403 1.053-.657.656-.929 1.475-1.053 2.403-.12.884-.119 2-.119 3.354V20a1 1 0 1 0 2 0v-7h6a1 1 0 1 0 0-2h-6v-1c0-1.442.002-2.424.1-3.159.096-.706.263-1.033.486-1.255.222-.223.55-.39 1.255-.485C15.076 5.002 16.058 5 17.5 5h3a1 1 0 1 0 0-2"
      />
    </svg>
  );
};
export default Fahrenheit;
