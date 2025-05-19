import React from "react";
const ComputerActivity: React.FC<
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
        d="M10.5 16.75a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 .5.5h2a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h2a.5.5 0 0 0 .5-.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 2.25A2.75 2.75 0 0 0 1.25 5v10A2.75 2.75 0 0 0 4 17.75h16A2.75 2.75 0 0 0 22.75 15V5A2.75 2.75 0 0 0 20 2.25zm9.895 4.303a1 1 0 0 0-1.844.13l-1.236 3.71-.42-.84A1 1 0 0 0 9.5 9H7a1 1 0 0 0 0 2h1.882l1.224 2.447a1 1 0 0 0 1.843-.13l1.236-3.71.42.84A1 1 0 0 0 14.5 11H17a1 1 0 1 0 0-2h-1.882z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ComputerActivity;
