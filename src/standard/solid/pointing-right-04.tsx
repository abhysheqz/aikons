import React from "react";
const PointingRight_04: React.FC<
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
        d="m13.797 9.75-1.14-1.068-.019-.017-.023-.02c-.525-.46-.953-.834-1.33-1.113-.393-.291-.773-.511-1.213-.637a3.8 3.8 0 0 0-1.12-.144 4.1 4.1 0 0 0-1.281.211c-.486.164-1.031.443-1.724.898L2.999 9.78a2.75 2.75 0 0 0-1.249 2.304V18.5a3.75 3.75 0 0 0 3.75 3.75h5a3.75 3.75 0 0 0 3.75-3.75v-3.75h5.5a2.5 2.5 0 0 0 0-5zM18.293 1.793a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L19.086 6H15.5a1 1 0 1 1 0-2h3.586l-.793-.793a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_04;
