import React from "react";
const ThreeDScale: React.FC<
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
        d="m12.999 12.68 4.669 4.201-1.338 1.487L12 14.47l-4.331 3.898L6.33 16.88 11 12.68V8.125h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.25 15.25 3.2v3.85L12 9 8.75 7.05l.002-3.85zM4.5 15l3.251 1.95v3.85L4.5 22.75 1.25 20.8l.002-3.85zM19.5 15.001l3.251 1.95v3.85L19.5 22.75l-3.25-1.95.002-3.85z"
      />
    </svg>
  );
};
export default ThreeDScale;
