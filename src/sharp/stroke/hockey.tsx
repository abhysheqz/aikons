import React from "react";
const Hockey: React.FC<
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
        d="m11.861 19.224 8.987-15.503c.32-.553.117-1.25-.457-1.565-.565-.31-1.286-.143-1.637.38L8.612 17.67c-.376.562-1.151.742-1.758.409-.804-.442-.684-1.23-.408-1.93.263-.67-.02-1.421-.67-1.778-.861-.474-1.746-.041-2.205.716-1.319 2.175-.218 5.269 1.913 6.44 2.267 1.246 5.112-.12 6.377-2.302Z"
      />
      <circle
        cx={18.5}
        cy={19.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 7 2 1.5"
      />
    </svg>
  );
};
export default Hockey;
