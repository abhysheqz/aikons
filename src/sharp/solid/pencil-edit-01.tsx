import React from "react";
const PencilEdit_01: React.FC<
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
        d="M17.53 3.47a.75.75 0 0 0-1.06 0L14 5.94 18.06 10l2.47-2.47a.75.75 0 0 0 0-1.06zM17 11.06 12.94 7l-8.47 8.47a.75.75 0 0 0-.198.348l-1 4a.75.75 0 0 0 .91.91l4-1a.75.75 0 0 0 .348-.198zM18 20.75h-7v-2h7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PencilEdit_01;
