import React from "react";
const BarCode_01: React.FC<
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
        d="M2 20.5v-17h2v17zM6.5 16.5v-13h2v13zM11 16.5v-13h2v13zM15.5 16.5v-13h2v13zM20 20.5v-17h2v17zM6.5 18.5h2.009v2H6.5zM11 18.5h2.009v2H11zM15.5 18.5h2.009v2H15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BarCode_01;
