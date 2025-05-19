import React from "react";
const Rhombus: React.FC<
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
        d="M6.914 5.996C9.312 3.332 10.51 2 12 2s2.688 1.332 5.086 3.996l.318.353C19.8 9.013 21 10.345 21 12s-1.199 2.987-3.596 5.651l-.318.353C14.688 20.668 13.49 22 12 22s-2.688-1.332-5.086-3.996l-.318-.353C4.2 14.987 3 13.655 3 12s1.199-2.987 3.596-5.651z"
      />
    </svg>
  );
};
export default Rhombus;
