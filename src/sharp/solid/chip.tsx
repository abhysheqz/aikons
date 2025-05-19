import React from "react";
const Chip: React.FC<
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
        d="M20.25 3.75H3.75v16.5h16.5zm-3 3H6.75v10.5h7.56l2.94-2.94z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.25 4.5v-3h1.5v3zm4 0v-3h1.5v3zm4 0v-3h1.5v3zM1.5 7.25h3v1.5h-3zm18 0h3v1.5h-3zm-18 4h3v1.5h-3zm18 0h3v1.5h-3zm-18 4h3v1.5h-3zm18 0h3v1.5h-3zM7.25 22.5v-3h1.5v3zm4 0v-3h1.5v3zm4 0v-3h1.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chip;
