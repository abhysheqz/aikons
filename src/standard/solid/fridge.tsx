import React from "react";
const Fridge: React.FC<
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
        d="M6 1.25A2.75 2.75 0 0 0 3.25 4v16A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20v-9.25H3.25v-1.5h17.5V4A2.75 2.75 0 0 0 18 1.25zM7 6a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m.25 11a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Fridge;
