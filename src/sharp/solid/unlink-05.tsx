import React from "react";
const Unlink_05: React.FC<
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
        d="M7 8.013a4 4 0 1 0 0 8h3.5v2H7a6 6 0 0 1 0-12h3.5v2zm10 0h-3.5v-2H17a6 6 0 0 1 0 12h-3.5v-2H17a4 4 0 0 0 0-8M9.219 4.747l-2-2.498L8.78 1l2 2.499zm4-1.248 2-2.499 1.562 1.249-2 2.498zM10.78 20.502 8.78 23l-1.562-1.249 2-2.498zm4-1.25 2 2.5L15.219 23l-2-2.498z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unlink_05;
