import React from "react";
const Yogurt: React.FC<
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
        d="M16.921 10.272a3.1 3.1 0 0 1-1.848 1.123m1.848-1.123c1.308-1.67.257-3.917-1.33-4.52m1.33 4.52c1.933 0 4.19 2.526 2.465 4.728M15.59 5.752C16.015 3.84 13.867 2 10.761 2c.715 1.175 1.19 2.791.011 3.502C9.035 6.55 5.89 6.553 6.5 10.322m9.092-4.57c-.164.742-.716 1.496-1.75 2.157M4.6 14.999c-1.517-1.935.111-4.36 1.9-4.677m0 0c.845-.15 1.77.03 2.5.603M3.5 15l2 7h13l2-7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 15h20"
      />
    </svg>
  );
};
export default Yogurt;
