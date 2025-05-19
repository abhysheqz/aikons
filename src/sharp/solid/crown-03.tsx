import React from "react";
const Crown_03: React.FC<
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
        d="M16.768 10.144 12 2.75l-4.768 7.394-5.982-3.54L4.42 18.25h15.16l3.17-11.645zM19.5 21.25v-2h-15v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crown_03;
