import React from "react";
const PointingRight_01: React.FC<
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
        d="M15.99 4.492h5.28M19.477 2l2.49 2.492-2.49 2.492M2 10.897h2.043L9.898 6.46q.181-.133.385-.23c.146-.07.297-.13.456-.161a1.4 1.4 0 0 1 .285-.014h.002c.26 0 .479.023.752.144.135.06.302.192.397.265.38.29.587.788.603 1.3.016.509-.232.867-.604 1.215-.731.684-1.364 1.25-2.198 2.065h9.949c.53-.002 1.156.099 1.504.464.758.858.764 1.633.008 2.54-.348.381-.895.468-1.438.47h-5.534c.17 3.009-1.039 5.229-1.901 6.277-.87 1.057-1.806 1.366-3.42 1.13-1.7-.289-2.874-.963-5.115-2.021H2.04"
      />
    </svg>
  );
};
export default PointingRight_01;
