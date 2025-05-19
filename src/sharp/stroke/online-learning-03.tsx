import React from "react";
const OnlineLearning_03: React.FC<
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
        d="M5 6.006H2v16.023h11v-3.004"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.492 19.025h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m12.5 10.512 2-5.007h1l2 5.007m-1-1.502h-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.99 2.027H8.017a.01.01 0 0 0-.01.01V13.5q.001.01.01.01h4.467v2.527c0 .008.01.013.016.008l3.55-2.535h5.938a.01.01 0 0 0 .01-.01V2.037a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default OnlineLearning_03;
