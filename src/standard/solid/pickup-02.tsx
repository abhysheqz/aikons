import React from "react";
const Pickup_02: React.FC<
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
      <circle cx={17} cy={18} r={2.5} fill="currentColor" />
      <circle cx={7} cy={18} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 4a1 1 0 0 1 1-1h2.823a3 3 0 0 1 2.623 1.543L19.2 7.701a1 1 0 0 0 .223.273l2.18 1.869A4 4 0 0 1 23 12.88v.87h-.75a.75.75 0 0 0 0 1.5H23V17a2 2 0 0 1-2 2h-.333A3.804 3.804 0 0 0 17 14.2a3.8 3.8 0 0 0-3.667 4.8h-2.666A3.804 3.804 0 0 0 7 14.2a3.8 3.8 0 0 0-3.683 4.74 2 2 0 0 1-.624-.276l-.802-.535A2 2 0 0 1 1 16.465V11.5a1 1 0 0 1 1-1h9zm5.812 6.75h2.776l-1.466-1.257a3 3 0 0 1-.67-.821l-1.755-3.158A1 1 0 0 0 14.823 5h-1.335l2.178 5c.198.455.649.75 1.146.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pickup_02;
