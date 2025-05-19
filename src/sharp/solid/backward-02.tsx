import React from "react";
const Backward_02: React.FC<
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
        d="M12.37 5.347a.75.75 0 0 1 .38.653v12a.75.75 0 0 1-1.136.643l-10-6a.75.75 0 0 1 0-1.286l10-6a.75.75 0 0 1 .755-.01"
      />
      <path
        fill="currentColor"
        d="M22.37 5.347a.75.75 0 0 1 .38.653v12a.75.75 0 0 1-1.136.643l-10-6a.75.75 0 0 1 0-1.286l10-6a.75.75 0 0 1 .755-.01"
      />
    </svg>
  );
};
export default Backward_02;
