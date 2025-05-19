import React from "react";
const CameraAutomatically_01: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15 18-2.5-7h-1L9 18m.857-2h4.286"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.515 6.009c.258-.052 3.599-.022 4.977 0l.526 15.963-9.945.01H2.02l.474-15.93c.002-.053-.01-.034.065-.034 1.405-.022 4.684-.06 4.937-.009m9.513 1.985-1.496-6.012H8.502L6.999 8"
      />
    </svg>
  );
};
export default CameraAutomatically_01;
