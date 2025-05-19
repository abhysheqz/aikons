import React from "react";
const ArrowExpand_01: React.FC<
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
        d="M22 2h-7v2h3.587L12.5 10.086l1.414 1.414 6.087-6.086V9h2zM5.414 20l6.086-6.086-1.414-1.414L4 18.586V14H2v8h8v-2z"
      />
    </svg>
  );
};
export default ArrowExpand_01;
