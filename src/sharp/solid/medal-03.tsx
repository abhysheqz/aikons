import React from "react";
const Medal_03: React.FC<
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
        d="M11.665 12.33a.75.75 0 0 1 .67 0l4 2a.75.75 0 0 1 .415.67v5a.75.75 0 0 1-.415.67l-4 2a.75.75 0 0 1-.67 0l-4-2A.75.75 0 0 1 7.25 20v-5a.75.75 0 0 1 .415-.67zM11 1.25V6h2V1.25h7c.414 0 .75.333.75.745v5.448L12 11.25 3.25 7.443V1.995c0-.198.079-.387.22-.527A.75.75 0 0 1 4 1.25z"
      />
    </svg>
  );
};
export default Medal_03;
