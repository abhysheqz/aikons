import React from "react";
const Timer_02: React.FC<
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
        d="M9.145 2.913h1.904v1.063a9.5 9.5 0 0 0-3.487 1.255L6.486 4.149 5.139 5.502l.877.882a9.52 9.52 0 0 0-3.056 5.99l1.893.21c.42-3.818 3.697-6.801 7.625-6.801 4.208 0 7.62 3.426 7.62 7.652s-3.412 7.652-7.62 7.652H2.002V23h10.476c5.26 0 9.524-4.282 9.524-9.565a9.56 9.56 0 0 0-3.074-7.038l.89-.895-1.346-1.353-1.083 1.088a9.44 9.44 0 0 0-4.435-1.356v-.968h1.905V1H9.145zm2.857 8.13c.307 0 .6.06.87.166l2.266-2.276 1.347 1.352-2.266 2.276c.106.271.164.566.164.874a2.386 2.386 0 0 1-2.381 2.391 2.386 2.386 0 0 1-2.38-2.39 2.386 2.386 0 0 1 2.38-2.392m-7.143 5.261H2.002v-1.913h2.857zm-2.857 3.348h4.762V17.74H2.002z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Timer_02;
