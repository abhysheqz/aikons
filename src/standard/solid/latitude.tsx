import React from "react";
const Latitude: React.FC<
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
        d="M1.045 13c.094 1.05.336 2.056.705 3h20.5c.369-.944.61-1.95.705-3zm21.91-2a11 11 0 0 0-.705-3H1.75c-.369.944-.61 1.95-.705 3zM2.78 6H21.22A10.99 10.99 0 0 0 12 1a10.99 10.99 0 0 0-9.221 5M21.22 18H2.78c1.963 3.01 5.36 5 9.221 5a10.99 10.99 0 0 0 9.221-5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Latitude;
