import React from "react";
const Auction: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.501 11.5-7.5 7.5 3 3 7.5-7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 11.904 14.904 19M12.095 2 5 9.095m5.835-5.833s3.047 2.285 5.333 4.571 4.571 5.333 4.571 5.333m-4.571 4.572s-3.048-2.286-5.333-4.572-4.572-5.333-4.572-5.333"
      />
    </svg>
  );
};
export default Auction;
