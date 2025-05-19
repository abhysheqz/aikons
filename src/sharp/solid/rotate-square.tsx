import React from "react";
const RotateSquare: React.FC<
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
        d="M11.309 1.536a.977.977 0 0 1 1.382 0l9.773 9.773c.381.382.381 1 0 1.382l-9.773 9.773a.977.977 0 0 1-1.382 0L1.536 12.69a.977.977 0 0 1 0-1.382l2.526-2.53-1.483-.21.274-1.934 3.42.484a.977.977 0 0 1 .555 1.658L3.608 12 12 20.39 20.39 12 12 3.61 9.27 6.338 7.89 4.957z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RotateSquare;
