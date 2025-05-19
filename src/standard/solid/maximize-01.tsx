import React from "react";
const Maximize_01: React.FC<
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
        d="M16.904 9.412c.306.073.69.175 1.116.31 1.013.323 2.327.857 3.339 1.696 1.406 1.165 1.575 2.781 1.249 4.34-.308 1.472-1.08 3.035-1.84 4.434V22a.75.75 0 0 1-.75.75h-8.989a.75.75 0 0 1-.75-.75v-1.717l-4.478-5.318-.021-.026c-.727-.948-.685-2.093-.002-2.99l.031-.037c.955-1.097 2.51-1.125 3.556-.248l.005.005 1.665 1.42 1.689-8.943.011-.05a2.476 2.476 0 0 1 2.397-1.846c1.59 0 2.76 1.446 2.388 3.036zM6 2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.586L7.707 5.707a1 1 0 0 1-1.414-1.414L7.586 3H7a1 1 0 0 1-1-1M1 7a1 1 0 0 1 2 0v.586l1.293-1.293a1 1 0 0 1 1.414 1.414L4.414 9H5a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Maximize_01;
