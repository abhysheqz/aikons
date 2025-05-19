import React from "react";
const MoreVertical: React.FC<
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
        d="M10.5 12a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1-1.5-1.5M10.5 18a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1-1.5-1.5M10.5 6A1.5 1.5 0 1 1 12 7.5 1.5 1.5 0 0 1 10.5 6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreVertical;
