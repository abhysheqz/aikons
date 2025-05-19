import React from "react";
const UserRoadside: React.FC<
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
        d="M12 .75a3 3 0 0 0-1.59 5.544c-2.935.417-4.719 3.68-3.545 6.564a1.67 1.67 0 0 0 1.543 1.059H8.9l.828 3.485c.253 1.065 1.175 1.848 2.272 1.848s2.019-.783 2.272-1.848l.828-3.485h.492c.688 0 1.287-.431 1.543-1.059 1.174-2.883-.61-6.147-3.545-6.564A3 3 0 0 0 12 .75M6 15.25h1a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2m10 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-4 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserRoadside;
