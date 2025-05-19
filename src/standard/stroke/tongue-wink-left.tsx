import React from "react";
const TongueWinkLeft: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        fill="#D9D9D9"
        fillRule="evenodd"
        d="M16.009 9H16z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.009 9H16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 14a5 5 0 0 0 4 2 5 5 0 0 0 4-2M10 16v1.5a2 2 0 1 0 4 0V16M7 9.5c.277-.277.863-.479 1.5-.5.51-.017 1.055.055 1.5.5 0-.5-.5-1.5-1-2"
      />
    </svg>
  );
};
export default TongueWinkLeft;
