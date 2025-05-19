import React from "react";
const SquareArrowMoveLeftUp: React.FC<
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
        d="M4.5 1.5a2.75 2.75 0 0 0-2.75 2.75v15A2.75 2.75 0 0 0 4.5 22h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.5 1.5zm5.969 4.664a.75.75 0 0 1 .117 1.055L9.56 8.5H14a2.75 2.75 0 0 1 2.75 2.75v5.5a.75.75 0 0 1-1.5 0v-5.5c0-.69-.56-1.25-1.25-1.25H9.56l1.026 1.281a.75.75 0 0 1-1.172.938L7.416 9.72a.75.75 0 0 1 .003-.946l1.995-2.493a.75.75 0 0 1 1.055-.118"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareArrowMoveLeftUp;
