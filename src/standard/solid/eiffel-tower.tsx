import React from "react";
const EiffelTower: React.FC<
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
        d="M6.75 11a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75M5.25 16a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.453 21.487c1.586-1.692 2.834-3.564 3.83-5.487h11.434c.996 1.923 2.244 3.795 3.83 5.487A.75.75 0 0 1 21 22.75h-4a.75.75 0 0 1-.716-.526c-.649-2.078-2.363-3.474-4.284-3.474s-3.635 1.396-4.284 3.474A.75.75 0 0 1 7 22.75H3a.75.75 0 0 1-.547-1.263M7.225 14c.43-1.004.801-2.01 1.125-3h7.3c.324.99.695 1.996 1.125 3zM10.14 3.851a.75.75 0 0 1 .735-.601h.375V2a.75.75 0 0 1 1.5 0v1.25h.375a.75.75 0 0 1 .735.601c.309 1.528.676 3.286 1.19 5.149h-6.1c.514-1.863.881-3.621 1.19-5.149"
      />
    </svg>
  );
};
export default EiffelTower;
