import React from "react";
const FlipBottom: React.FC<
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
        d="M20.777 1.25c.538 0 .975.437.975.977v2.932h-1.95V3.204h-1.95V1.25zm-.975 7.818V7.113h1.95v1.955zM12.977 1.25H15.9v1.954h-2.924zm-4.874 0h2.924v1.954H8.103zm-4.876 0h2.926v1.954H4.207l.01 1.95-1.949.01-.016-2.932a.98.98 0 0 1 .975-.982m-.975 7.818V7.113h1.95v1.955z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.748 21.773c0 .54-.437.977-.975.977H3.233a.976.976 0 0 1-.975-.976l-.008-10.75h19.498z"
      />
    </svg>
  );
};
export default FlipBottom;
