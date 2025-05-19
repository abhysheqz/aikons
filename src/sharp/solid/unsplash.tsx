import React from "react";
const Unsplash: React.FC<
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
        d="M8.75 3.75h6.5v4.5h-6.5zM8.75 15.25h6.5v-5h5v10H3.75v-10h5z"
      />
    </svg>
  );
};
export default Unsplash;
