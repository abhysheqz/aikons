import React from "react";
const PlusMinusCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M11 7v2.182H8.5v2H11v2.182h2v-2.182h2.5v-2H13V7zm4.5 10v-2h-7v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlusMinusCircle_01;
