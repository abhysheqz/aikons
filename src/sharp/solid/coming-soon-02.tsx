import React from "react";
const ComingSoon_02: React.FC<
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
        d="M12 4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M9.75 3.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.75 13.5a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0m12.874-4.084-3 4.5-1.248-.832 3-4.5zM12 7.25c.56 0 1.104.074 1.621.212l-3.978 5.969L12 15.002v4.748a6.25 6.25 0 1 1 0-12.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComingSoon_02;
