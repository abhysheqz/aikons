import React from "react";
const PlayStore: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.454 17.39c2.085-1.073 6.526-3.21 9.028-4.538a.967.967 0 0 0 0-1.717C14.981 9.808 10.54 7.683 8.454 6.61A.998.998 0 0 0 7 7.5v9a.998.998 0 0 0 1.454.89ZM7 17.5l7.5-8M7 6.5l7.5 8"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 4.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
};
export default PlayStore;
