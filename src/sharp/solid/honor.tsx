import React from "react";
const Honor: React.FC<
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
        d="M22 4.001H2v-2h20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 3.001h-17v13.536l7.946 5.294a1 1 0 0 0 1.11 0l7.945-5.294zm-6 5h-5v2h5zm0 5h-5v2h5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Honor;
