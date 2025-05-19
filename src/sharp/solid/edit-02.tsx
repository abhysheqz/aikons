import React from "react";
const Edit_02: React.FC<
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
        d="M22 22h-9v-2h9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.53 11.47 22 8l-6-6-3.47 3.47zM17.47 12.53l-6-6L2 16v6h6z"
      />
    </svg>
  );
};
export default Edit_02;
