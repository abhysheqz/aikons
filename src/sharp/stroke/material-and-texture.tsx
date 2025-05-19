import React from "react";
const MaterialAndTexture: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m9.5 14.5 7.927-3.755M6.33 13.116l4.668-2.154M21 7l-9-4-9 4 9 4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8.216 9.682 3 12l9 4 9-4-5.216-2.318"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8.222 14.68 3 17l9 4 9-4-5.222-2.32"
      />
    </svg>
  );
};
export default MaterialAndTexture;
