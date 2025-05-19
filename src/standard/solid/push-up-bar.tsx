import React from "react";
const PushUpBar: React.FC<
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
        d="M6.75 6h-.751a1 1 0 0 0-1 1v2.5H5.5a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2h.498V7a3 3 0 0 1 3-3h.824A1.75 1.75 0 0 1 8.5 2.748h7A1.75 1.75 0 0 1 17.178 4H18a3 3 0 0 1 3 3v2.5h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5V7a1 1 0 0 0-1-1h-.75v.5a.75.75 0 0 1-.472.696l-2.5.999a.75.75 0 0 1-.613-.026L12 7.34l-1.664.83a.75.75 0 0 1-.613.027l-2.501-1A.75.75 0 0 1 6.75 6.5zm-.751 10a1 1 0 0 0-1 1v2.5H5.5a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2h.498V17a3 3 0 0 1 3-3h.824A1.75 1.75 0 0 1 8.5 12.748h7A1.75 1.75 0 0 1 17.178 14H18a3 3 0 0 1 3 3v2.5h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5V17a1 1 0 0 0-1-1h-.75v.5a.75.75 0 0 1-.472.697l-2.5.998a.75.75 0 0 1-.613-.026L12 17.34l-1.665.83a.75.75 0 0 1-.613.026l-2.5-.998a.75.75 0 0 1-.472-.697V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PushUpBar;
