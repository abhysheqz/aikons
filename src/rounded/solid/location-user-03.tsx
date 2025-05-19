import React from "react";
const LocationUser_03: React.FC<
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
        d="M12 1.25a3 3 0 0 0-1.59 5.544c-2.935.417-4.719 3.68-3.545 6.564a1.67 1.67 0 0 0 1.543 1.059H8.9l.828 3.485c.253 1.065 1.175 1.848 2.272 1.848s2.019-.783 2.272-1.848l.828-3.485h.492c.688 0 1.287-.431 1.543-1.059 1.174-2.883-.61-6.147-3.545-6.564A3 3 0 0 0 12 1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.647 15.255a1 1 0 0 1-.375 1.364C5.268 17.191 5 17.734 5 18.066c0 .39.387 1.064 1.761 1.697 1.29.593 3.14.987 5.239.987s3.95-.394 5.239-.987C18.613 19.129 19 18.457 19 18.066c0-.332-.267-.875-1.272-1.447a1 1 0 1 1 .989-1.738c1.219.694 2.283 1.762 2.283 3.185 0 1.643-1.404 2.813-2.925 3.513-1.606.74-3.755 1.171-6.075 1.171s-4.469-.431-6.075-1.17C4.405 20.878 3 19.71 3 18.065c0-1.423 1.064-2.491 2.283-3.185a1 1 0 0 1 1.364.374"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationUser_03;
