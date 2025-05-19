import React from "react";
const CircleArrowUp_03: React.FC<
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
        d="M12 1.25c5.936 0 10.75 4.812 10.75 10.75 0 5.936-4.814 10.75-10.75 10.75-5.938 0-10.75-4.814-10.75-10.75C1.25 6.061 6.061 1.25 12 1.25m4 6.874v-1.5H8v1.5zm-1.531 5.78 1.06-1.06L12 9.314l-3.53 3.53 1.06 1.06 1.72-1.72v5.19h1.5v-5.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CircleArrowUp_03;
