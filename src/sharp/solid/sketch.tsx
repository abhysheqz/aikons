import React from "react";
const Sketch: React.FC<
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
        d="M17.781 3.302 12 2.25 6.219 3.302 1.25 9.379 12 21.75 22.75 9.379zM7.5 8 6 5l.179 3.75L2.5 9.5l4.008.75L11 18.5l-2.856-8.25h7.712L13 18.5l4.492-8.25L21.5 9.5l-3.679-.75L18 5l-1.5 3-3.781-4.066 2.758 4.816H8.523l2.758-4.816z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sketch;
