import React from "react";
const Forrst: React.FC<
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
        d="M13.596 3.179c-.697-1.239-2.491-1.239-3.187 0L1.485 19.054C.8 20.275 1.701 21.75 3.08 21.75h6.673v-4.89l-2.219-1.774a.75.75 0 1 1 .937-1.172l1.282 1.026v-3.22a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v.97l.22-.22a.75.75 0 1 1 1.06 1.06l-1.28 1.28v1.88l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v2.94h6.674c1.378 0 2.28-1.475 1.593-2.696z"
      />
    </svg>
  );
};
export default Forrst;
