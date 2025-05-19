import React from "react";
const Bebo: React.FC<
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
        strokeWidth={1.5}
        d="M12 22.002c4.417 0 7.998-3.592 7.998-8.023a7.92 7.92 0 0 0-7.953-7.964v4c2.205 0 3.945 1.782 3.945 3.995a4 4 0 0 1-3.993 4.005 4 4 0 0 1-3.994-4.005L7.986 2.048a.05.05 0 0 0-.05-.05H4.052a.05.05 0 0 0-.05.05v11.93c0 4.432 3.581 8.024 7.998 8.024Z"
      />
    </svg>
  );
};
export default Bebo;
