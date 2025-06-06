import React from "react";
const LaurelWreathRight_03: React.FC<
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
        d="M13.011 6.5s-1.832-.066-2.673-1.566c-.84-1.5.15-2.934.15-2.934s1.833.066 2.674 1.566c.84 1.5-.15 2.934-.15 2.934Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12.817 6.5c1.463 2.099 3.317 6.975-.976 9.688C6.477 19.578 5.989 20.547 5.5 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.968 18.5s3.572-1.364 1.53-5c0 0-4.082 1.364-1.53 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 19s2.367-3.075 5.5.105c0 0-2.508 3.577-5.5-.105M14.51 12.94s-.398-4.086 3.96-3.936c0 0 .636 4.572-3.96 3.935"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.49 12.5s.398-4.085-3.96-3.935c0 0-.636 4.572 3.96 3.935"
      />
    </svg>
  );
};
export default LaurelWreathRight_03;
