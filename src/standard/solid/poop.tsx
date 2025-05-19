import React from "react";
const Poop: React.FC<
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
        d="M13.243 1.03a1 1 0 0 0-1.192 1.286l.005.015.022.073c.019.066.045.164.07.282.055.243.102.54.102.814 0 .296-.055.436-.082.477l-.001.001A.5.5 0 0 1 12 4h-2a3 3 0 0 0-2.724 4.258 3.25 3.25 0 0 0-2.618 4.82A4.501 4.501 0 0 0 5.5 22h13a4.5 4.5 0 0 0 .842-8.921A3.25 3.25 0 0 0 16.5 8.25h-.192A4 4 0 0 0 17 6c0-1.165-.292-2.258-.941-3.15-.655-.9-1.617-1.52-2.817-1.82m.59 4.056c.279-.42.379-.895.407-1.302q.11.116.201.242C14.792 4.508 15 5.166 15 6a2 2 0 0 1-2 2h-3a1 1 0 0 1 0-2h2c.791 0 1.436-.32 1.832-.914M5.5 15a2.5 2.5 0 0 0 0 5h13a2.5 2.5 0 0 0 0-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Poop;
