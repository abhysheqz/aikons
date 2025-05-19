import React from "react";
const BackMuscleBody: React.FC<
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
        d="M15.5 10A1.5 1.5 0 0 1 14 8.5M8.5 10A1.5 1.5 0 0 0 10 8.5M14 2v.643c0 .587 0 .88.065 1.13a2 2 0 0 0 1.16 1.336c.237.1.527.141 1.108.224 1.162.166 1.743.25 2.218.45a4 4 0 0 1 2.318 2.672C21 8.954 21 9.54 21 10.714V22M10 2v.643c0 .587 0 .88-.065 1.13a2 2 0 0 1-1.16 1.336c-.237.1-.527.141-1.108.224-1.162.166-1.743.25-2.218.45A4 4 0 0 0 3.13 8.454C3 8.954 3 9.54 3 10.714V22M12 13v9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 11.5s-.545 2.864-.497 5.727C17.535 19.127 18 22 18 22M6 11.5s.545 2.864.497 5.727C6.465 19.127 6 22 6 22"
      />
    </svg>
  );
};
export default BackMuscleBody;
