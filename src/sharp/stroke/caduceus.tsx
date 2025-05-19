import React from "react";
const Caduceus: React.FC<
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
        d="M16 18.394C16 16.867 14.21 16 12 16s-4 .672-4 1.5S9.79 19 12 19c1.657 0 3 .672 3 1.5S13.657 22 12 22c-1.285 0-2.809-.711-2.973-1.645M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 5v11M16.242 5c-.893 2.115-3.31 5.334-4.242 5.738 4.5 5.016 9.166.435 10-1.734-.883 0-4.05-1.91-5.758-4.004ZM7.758 5c.893 2.115 3.31 5.334 4.242 5.738-4.5 5.016-9.166.435-10-1.734.883 0 4.05-1.91 5.758-4.004Z"
      />
    </svg>
  );
};
export default Caduceus;
