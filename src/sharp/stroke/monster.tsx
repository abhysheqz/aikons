import React from "react";
const Monster: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16.5 11.5c0 1.933-2.015 3.5-4.5 3.5s-4.5-1.567-4.5-3.5S9.515 8 12 8s4.5 1.567 4.5 3.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 4a8.5 8.5 0 0 0-5.5 14.98V22h11v-3.02A8.5 8.5 0 0 0 12 4Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 18c-.644.619-1.527 1-2.5 1a3.6 3.6 0 0 1-2.5-1M16 5c.167-.9 1.5-3 3.5-3M8 5c-.167-.9-1.5-3-3.5-3"
      />
    </svg>
  );
};
export default Monster;
