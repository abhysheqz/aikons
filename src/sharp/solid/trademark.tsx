import React from "react";
const Trademark: React.FC<
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
        d="M22 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 2 2.25zm-17 7h1.75V16h1.5V9.25H10v-1.5H5zm8.43-1.5h-1.68V16h1.5v-5.594l1.671 2.844h1.252l1.577-2.786V16h1.5V7.75h-1.687l-2.029 3.583z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Trademark;
