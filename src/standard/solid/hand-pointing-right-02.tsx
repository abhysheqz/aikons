import React from "react";
const HandPointingRight_02: React.FC<
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
        d="m13.797 7.25-1.14-1.068-.019-.017-.023-.02c-.525-.46-.953-.834-1.33-1.113-.393-.291-.773-.511-1.213-.637a3.8 3.8 0 0 0-1.12-.144 4.1 4.1 0 0 0-1.281.211c-.486.164-1.031.443-1.724.898L2.999 7.28A2.75 2.75 0 0 0 1.75 9.584V16a3.75 3.75 0 0 0 3.75 3.75h5A3.75 3.75 0 0 0 14.25 16v-3.75h5.5a2.5 2.5 0 0 0 0-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandPointingRight_02;
