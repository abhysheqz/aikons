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
        fill="currentColor"
        d="M9.313 2.427C10.159 1.709 11 1.25 12 1.25s1.84.459 2.688 1.177l6.031 6.701c.648.943 1.031 1.838 1.031 2.872s-.383 1.929-1.03 2.872l-6.032 6.701C13.84 22.291 13 22.75 12 22.75s-1.84-.459-2.687-1.177L3.28 14.872C2.633 13.929 2.25 13.034 2.25 12s.383-1.929 1.03-2.872z"
      />
    </svg>
  );
};
export default Rhombus;
