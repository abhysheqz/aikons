import React from "react";
const Vomiting: React.FC<
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
        d="M4.4 18.5A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2.4 6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8 8 1.5 1.452L8 11m8-3-1.5 1.452L16 11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 19c.473-2.282 2.532-4 5-4s4.527 1.718 5 4M12 19v2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.465 16.5c0 1.988.393 4.233-1.465 5.5M15.534 16.5c0 1.98-.39 4.234 1.466 5.5"
      />
    </svg>
  );
};
export default Vomiting;
