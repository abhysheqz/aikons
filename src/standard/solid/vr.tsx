import React from "react";
const Vr: React.FC<
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
        d="M1.25 6A3.75 3.75 0 0 1 5 2.25h14A3.75 3.75 0 0 1 22.75 6v4A3.75 3.75 0 0 1 19 13.75h-3.095a3.75 3.75 0 0 1-2.88-1.35L12 11.172l-1.024 1.23a3.75 3.75 0 0 1-2.881 1.349H5A3.75 3.75 0 0 1 1.25 10zM4 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m-1.105 8.553a1 1 0 1 0-1.79.894c.638 1.274 1.98 2.406 3.728 3.21 1.18.544 2.583.957 4.167 1.171V21a1 1 0 0 0 1.709.706l2-2.01a1 1 0 0 0-.003-1.414l-2-1.99A1 1 0 0 0 9 17v.808c-1.287-.198-2.406-.542-3.33-.967-1.505-.693-2.412-1.562-2.775-2.288m20 .894a1 1 0 1 0-1.79-.894c-.792 1.585-2.909 2.98-6.246 3.457a1 1 0 0 0 .283 1.98c3.662-.523 6.545-2.128 7.753-4.543"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vr;
