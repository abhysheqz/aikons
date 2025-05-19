import React from "react";
const AiBrain_03: React.FC<
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
        d="M9.5 22.75a3.24 3.24 0 0 0 2.5-1.173 3.251 3.251 0 0 0 5.677-1.388 3.75 3.75 0 0 0 2.909-4.79 3.75 3.75 0 0 0 0-6.798 3.751 3.751 0 0 0-2.909-4.79A3.251 3.251 0 0 0 12 2.423a3.251 3.251 0 0 0-5.677 1.388A3.75 3.75 0 0 0 3.414 8.6a3.75 3.75 0 0 0 0 6.798 3.751 3.751 0 0 0 2.909 4.79 3.25 3.25 0 0 0 3.177 2.56m.5-15c-.621 0-1.173.397-1.37.987L6.79 14.263a.75.75 0 0 0 1.423.474l.495-1.487h2.586l.496 1.487a.75.75 0 1 0 1.423-.474L11.37 8.737A1.44 1.44 0 0 0 10 7.75m0 1.621.793 2.379H9.207zm6.25-.871a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiBrain_03;
