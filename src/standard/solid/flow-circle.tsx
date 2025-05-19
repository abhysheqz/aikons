import React from "react";
const FlowCircle: React.FC<
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
        d="M12.407 5.5H8a1 1 0 0 0-1 1v.855a4.752 4.752 0 0 1 0 9.29v.855a1 1 0 0 0 1 1h4.407a3.251 3.251 0 0 1 6.186 0H22a1 1 0 1 1 0 2h-3.407a3.252 3.252 0 0 1-6.186 0H8a3 3 0 0 1-3-3v-.855a4.752 4.752 0 0 1 0-9.29V6.5a3 3 0 0 1 3-3h4.407a3.252 3.252 0 0 1 6.186 0H22a1 1 0 1 1 0 2h-3.407a3.251 3.251 0 0 1-6.186 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlowCircle;
