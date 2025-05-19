import React from "react";
const Camera_02: React.FC<
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
        d="M15.506 13.982a3.5 3.5 0 0 1-3.502 3.495 3.5 3.5 0 0 1-3.501-3.495 3.5 3.5 0 0 1 3.501-3.495 3.5 3.5 0 0 1 3.502 3.495Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.004 5.994h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.514 6.009c.258-.052 3.599-.022 4.978 0l.525 15.963-9.945.01H2.02l.474-15.93c.002-.053-.01-.034.065-.034 1.405-.022 4.684-.06 4.937-.009m9.513 1.985-1.496-6.012H8.5L6.998 8"
      />
    </svg>
  );
};
export default Camera_02;
