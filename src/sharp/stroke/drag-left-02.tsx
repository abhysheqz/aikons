import React from "react";
const DragLeft_02: React.FC<
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
        strokeWidth={1.5}
        d="m9.072 13.579 1.965 1.719V6.426a1.5 1.5 0 0 1 3 0l.003 5.5h3.993a2.5 2.5 0 0 1 2.498 2.5v5a2.5 2.5 0 0 1-2.498 2.5h-6.496l-4.654-6.184a1.574 1.574 0 0 1-.007-1.954 1.52 1.52 0 0 1 2.196-.21Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.474 9.426a4 4 0 0 0 2.06-3.5 3.999 3.999 0 1 0-5.934 3.5M8.009 5.926h-4.88m2.418-3.004L2.53 5.926l3.007 3.007"
      />
    </svg>
  );
};
export default DragLeft_02;
