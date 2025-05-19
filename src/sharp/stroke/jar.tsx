import React from "react";
const Jar: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.104 8.005h-4.028m4.028 3.336h-4.028m4.028 3.335h-4.028m4.028 3.336h-4.028"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.993 9.988v-7.88a.1.1 0 0 1 .1-.1h2.9m0 0H20.89a.1.1 0 0 1 .084.155l-1.888 2.832v16.917a.1.1 0 0 1-.101.1H7.095a.1.1 0 0 1-.102-.1z"
      />
    </svg>
  );
};
export default Jar;
