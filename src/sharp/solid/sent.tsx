import React from "react";
const Sent: React.FC<
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
        d="M22.212 2.736a.75.75 0 0 0-.94-.95l-19 6.05A.75.75 0 0 0 2.2 9.239l8 3.502 4.272-4.27 1.06 1.06-4.29 4.291 3.267 7.964a.75.75 0 0 0 1.405-.05z"
      />
    </svg>
  );
};
export default Sent;
