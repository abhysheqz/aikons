import React from "react";
const Bot: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 15a2 2 0 1 1 0-4M20 15a2 2 0 1 0 0-4M7 7V4m0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 7V4m0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.009 11H9m6 0h-.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 17.5v-8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H16l-.348 1.742a.5.5 0 0 1-.781.308l-2.35-1.678a2 2 0 0 0-1.162-.372H6.5a2 2 0 0 1-2-2"
      />
    </svg>
  );
};
export default Bot;
