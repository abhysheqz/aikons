import React from "react";
const LayerMask_02: React.FC<
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
        d="M1 11.75C1 5.813 5.813 1 11.75 1S22.5 5.813 22.5 11.75 17.687 22.5 11.75 22.5 1 17.687 1 11.75m8.135-8.4a8.8 8.8 0 0 0 0 16.8 9.4 9.4 0 0 0 5.115-8.4c0-3.68-2.085-6.86-5.115-8.4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LayerMask_02;
