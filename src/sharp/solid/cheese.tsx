import React from "react";
const Cheese: React.FC<
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
        d="M15.664 3.33a.75.75 0 0 1 .905.182l5.775 6.738H1.822zM14.01 9a1 1 0 1 0 0-2H14a1 1 0 1 0 0 2zM1.25 11.75v9h12.5V20a1.25 1.25 0 1 1 2.5 0v.75h6.5v-9zm17.758 3.46a1 1 0 0 1-1 1h-.01a1 1 0 0 1 0-2h.01a1 1 0 0 1 1 1M8 13.96a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cheese;
