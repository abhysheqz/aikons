import React from "react";
const Rectangular_01: React.FC<
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
        d="M16 8.414v12.582l-9.591-.042 2.004-1.999h5.588a1 1 0 0 0 0-2H9v-8.03a1 1 0 1 0-2 0v8.615l-2 1.994V7h9.586l6-6H8a1 1 0 0 0-.707.293L3.388 5.198a1 1 0 0 0-.388.79v15.956a1 1 0 0 0 .996 1l13 .056a1 1 0 0 0 .715-.297l3.712-3.753A2 2 0 0 0 22 17.544L22 2.414z"
      />
    </svg>
  );
};
export default Rectangular_01;
