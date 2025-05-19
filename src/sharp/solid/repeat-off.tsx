import React from "react";
const RepeatOff: React.FC<
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
        d="M15.64 1.25 19 4.05v1.968H9.194C5.747 6.018 3 8.73 3 12.018c0 1.27.406 2.446 1.102 3.418L2.477 16.6A7.84 7.84 0 0 1 1 12.018c0-4.444 3.695-8 8.194-8h6.644L14.36 2.786zM21 11.981c0-1.27-.406-2.446-1.102-3.417l1.625-1.166A7.84 7.84 0 0 1 23 11.981c0 4.444-3.695 8-8.194 8H8.162l1.478 1.232-1.28 1.536L5 19.95v-1.968h9.806c3.447 0 6.194-2.712 6.194-6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 13H8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RepeatOff;
