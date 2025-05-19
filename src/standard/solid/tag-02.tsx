import React from "react";
const Tag_02: React.FC<
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
        d="M22.629 3.707a1 1 0 0 0-1.414-1.414L19.258 4.25H11.75c-.73 0-1.429.29-1.945.805l-7 7a2.75 2.75 0 0 0 0 3.89l6.172 6.171a2.75 2.75 0 0 0 3.89 0l7-7a2.75 2.75 0 0 0 .805-1.944V5.665zM7.215 14.293a1 1 0 0 1 1.414 0l2.002 2.004a1 1 0 1 1-1.415 1.413l-2.002-2.003a1 1 0 0 1 .001-1.415"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tag_02;
