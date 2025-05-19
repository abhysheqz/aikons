import React from "react";
const ArrowExpand_02: React.FC<
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
        d="M22 22h-7v-2h3.587L12.5 13.914l1.414-1.414 6.087 6.086V15h2zM5.414 4l6.086 6.086-1.414 1.414L4 5.414V10H2V2h8v2z"
      />
    </svg>
  );
};
export default ArrowExpand_02;
