import React from "react";
const MoveTo: React.FC<
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
        d="M19.5 5.75h-10v-2h10zM4.5 3.75h2.009v2H4.5zM4.5 9.75h2.009v2H4.5zM4.5 15.75h2.009v2H4.5zM19.5 11.75h-10v-2h10zM18.5 17.75h-9v-2h9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m16.67 16.75-2.086-2.086 1.414-1.415 3.501 3.5-3.501 3.501-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveTo;
