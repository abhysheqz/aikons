import React from "react";
const VictoryFinger_03: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.959 13.49-1.67-9.51c-.15-.825.217-1.678 1.03-1.896.88-.237 1.751.206 1.964 1.09L10 10.001l1.641-6.678c.184-.86.871-1.403 1.682-1.31.926.104 1.493.912 1.324 1.825l-1.164 6.645m-7.128-.43c-3.318 3.436-3.424 4.013 1.627 9.895v2.006m9.42.045c0-.722.014-2.033.014-2.033l1.6-1.836A4 4 0 0 0 20 15.503V12a2 2 0 0 0-2-2h-.5M14 8.5h1.004a2 2 0 0 1 2 2v1"
      />
    </svg>
  );
};
export default VictoryFinger_03;
