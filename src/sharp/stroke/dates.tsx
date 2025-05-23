import React from "react";
const Dates: React.FC<
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
        d="M5.847 18c-1.173.015-2.187-.274-2.878-.959-2.372-2.347-.05-8.452 3.31-11.777 3.36-3.326 6.485-2.614 8.857-.266.91.902 1.578 1.914 1.864 3.007M5.847 17.999a2.98 2.98 0 0 0-.731-3.083A3.06 3.06 0 0 0 2 14.192m3.846 3.807C7.08 17.983 8.5 17.5 9.5 17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 13.024s0 1.224 1.217 1.223 1.218 1.223 1.218 1.223M14.01 10s0 1.224 1.217 1.223 1.218 1.223 1.218 1.223m-.88 2.108s0 1.223 1.217 1.223C18.002 15.777 18 17 18 17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.808 6a3.005 3.005 0 0 1-3.807 3.808m12.735.427c3.326 3.326 2.614 6.42.266 8.767-2.347 2.348-5.441 3.06-8.767-.266S5.611 9.306 7.96 6.96c2.347-2.348 8.452-.05 11.777 3.276Z"
      />
    </svg>
  );
};
export default Dates;
