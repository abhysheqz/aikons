import React from "react";
const PenTool_02: React.FC<
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
        d="M7 1.248a.75.75 0 0 0-.745.836l.483 4.164h10.527l.48-4.164A.75.75 0 0 0 17 1.248zM16.436 6.248H12h4.435M4 13.109l2.442-5.36 11.12-.001L20 13.108l-7.246 9.64v-9h1.25v-1.5h-4v1.5h1.25v9.004z"
      />
    </svg>
  );
};
export default PenTool_02;
