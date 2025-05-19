import React from "react";
const Repeat: React.FC<
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
        d="M15.64 1.5 19 4.3v1.968H9.194C5.747 6.268 3 8.98 3 12.268c0 1.27.406 2.446 1.102 3.418L2.477 16.85A7.84 7.84 0 0 1 1 12.268c0-4.444 3.695-8 8.194-8h6.644L14.36 3.037zM21 11.731c0-1.27-.406-2.446-1.102-3.417l1.625-1.165A7.84 7.84 0 0 1 23 11.73c0 4.444-3.695 8-8.194 8H8.162l1.478 1.232-1.28 1.536L5 19.7v-1.968h9.806c3.447 0 6.194-2.712 6.194-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Repeat;
