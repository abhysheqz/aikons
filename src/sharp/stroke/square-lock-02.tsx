import React from "react";
const SquareLock_02: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 17v-3M16.51 9.007V6.53c0-2.566-1.946-4.532-4.38-4.532-2.433 0-4.57 1.966-4.57 4.532l-.12 2.476m-3.438 0h15.995V22H4.003z"
      />
    </svg>
  );
};
export default SquareLock_02;
