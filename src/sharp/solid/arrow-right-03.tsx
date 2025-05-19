import React from "react";
const ArrowRight_03: React.FC<
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
        d="M21 6v12h-2V6zM13.587 11l-2.293-2.294 1.414-1.414L17.415 12l-4.707 4.707-1.414-1.414L13.587 13H4v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowRight_03;
