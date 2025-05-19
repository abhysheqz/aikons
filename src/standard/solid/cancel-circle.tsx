import React from "react";
const CancelCircle: React.FC<
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
        d="M1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12 17.937 1.25 12 1.25 1.25 6.063 1.25 12m7.043-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 1 1-1.415 1.414L12 13.415l-2.292 2.292a1 1 0 0 1-1.415-1.414L10.587 12 8.293 9.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CancelCircle;
