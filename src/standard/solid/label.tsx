import React from "react";
const Label: React.FC<
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
        d="M1 5.75A2.75 2.75 0 0 1 3.75 3h12.446c.603 0 1.164.31 1.484.823l4.044 6.47a2.75 2.75 0 0 1 0 2.915l-4.044 6.47a1.75 1.75 0 0 1-1.484.822H3.75A2.75 2.75 0 0 1 1 17.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Label;
