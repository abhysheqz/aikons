import React from "react";
const UserWarning_01: React.FC<
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
        d="M3.57 16.958c1.718-2.83 5.038-4.208 8.43-4.208 3.393 0 6.711 1.377 8.43 4.208.635 1.047.258 2.257-.5 2.984l-.537.513a2.89 2.89 0 0 1-1.995.795H6.602c-.743 0-1.46-.282-1.995-.795l-.537-.513c-.758-.727-1.135-1.937-.5-2.984M7.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 3.75a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserWarning_01;
