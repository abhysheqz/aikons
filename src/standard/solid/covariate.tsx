import React from "react";
const Covariate: React.FC<
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
        d="M16.5 11A1.5 1.5 0 0 1 18 9.5h.009a1.5 1.5 0 0 1 0 3H18a1.5 1.5 0 0 1-1.5-1.5M12.5 15a1.5 1.5 0 0 1 1.5-1.5h.009a1.5 1.5 0 0 1 0 3H14a1.5 1.5 0 0 1-1.5-1.5M10.5 6A1.5 1.5 0 0 1 12 4.5h.009a1.5 1.5 0 0 1 0 3H12A1.5 1.5 0 0 1 10.5 6M6.5 10A1.5 1.5 0 0 1 8 8.5h.009a1.5 1.5 0 1 1 0 3H8A1.5 1.5 0 0 1 6.5 10"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4 3a1 1 0 0 0-2 0v18a1 1 0 0 0 1 1h18a1 1 0 1 0 0-2H5.433L20.707 4.707a1 1 0 0 0-1.414-1.414L4 18.605z"
      />
    </svg>
  );
};
export default Covariate;
