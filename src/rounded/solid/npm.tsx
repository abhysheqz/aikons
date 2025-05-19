import React from "react";
const Npm: React.FC<
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
        d="M12.057 1.75c-2.19 0-4.026 0-5.369.18-1.377.186-2.469.573-3.327 1.431s-1.245 1.95-1.43 3.327c-.181 1.344-.181 3.179-.181 5.37 0 2.19 0 3.91.18 5.254.186 1.377.573 2.469 1.43 3.327.86.858 1.951 1.245 3.328 1.43 1.343.181 3.064.181 5.255.181s4.026 0 5.369-.18c1.377-.186 2.469-.573 3.327-1.43.858-.859 1.245-1.951 1.43-3.328.181-1.343.181-3.064.181-5.255s0-4.025-.18-5.369c-.186-1.377-.573-2.469-1.43-3.327-.86-.858-1.951-1.245-3.328-1.43-1.343-.18-3.064-.18-5.255-.18M16 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4V9.5h2.5V17H16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Npm;
