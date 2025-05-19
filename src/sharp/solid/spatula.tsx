import React from "react";
const Spatula: React.FC<
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
        d="M16.53 1.47a.75.75 0 0 0-1.06 0L9.25 7.69v4l-7.374 7.415h-.001a2.134 2.134 0 0 0 .001 3.02 2.137 2.137 0 0 0 3.02 0l7.414-7.375h4l6.22-6.22a.75.75 0 0 0 0-1.06zm-1.061 4-3 3 1.06 1.06 3-3zm2 2-3 3 1.06 1.06 3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spatula;
