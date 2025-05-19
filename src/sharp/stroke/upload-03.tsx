import React from "react";
const Upload_03: React.FC<
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
        d="m17.999 9 3.998 2L18 21h-12l-4-10 4-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 13V3.398M9 6l3-3 3 3"
      />
    </svg>
  );
};
export default Upload_03;
