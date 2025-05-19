import React from "react";
const BaseballBat: React.FC<
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
        d="M21.435 2.565a4.488 4.488 0 0 0-6.717.418l-.004.005L4.03 17.273a3.09 3.09 0 0 0-2.562.883.75.75 0 0 0 0 1.06l3.313 3.314a.75.75 0 0 0 1.061 0c.696-.695.99-1.64.885-2.547L21.006 9.29l.01-.009a4.488 4.488 0 0 0 .419-6.716M7.32 15.38l-1.827 2.443.716.675 2.418-1.81zm7.93 3.12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BaseballBat;
