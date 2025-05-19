import React from "react";
const InsertBottomImage: React.FC<
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
        d="M20.25 2.25h-18v2h18zM13.25 6.25h-11v2h11zM2.25 11a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default InsertBottomImage;
