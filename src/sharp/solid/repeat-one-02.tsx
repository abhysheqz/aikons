import React from "react";
const RepeatOne_02: React.FC<
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
        d="M21.135 2.019H23v8h-2V4.747l-.356.3-1.288-1.53zM14.64 1.249l3.36 2.8v1.968H9.194C5.747 6.017 3 8.73 3 12.017c0 1.27.406 2.446 1.102 3.418L2.477 16.6A7.84 7.84 0 0 1 1 12.017c0-4.444 3.695-8 8.194-8h5.644L13.36 2.785zM14.806 17.983c3.447 0 6.194-2.712 6.194-6h2c0 4.444-3.695 8-8.194 8H8.162l1.478 1.232-1.28 1.537-3.36-2.8v-1.969z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RepeatOne_02;
