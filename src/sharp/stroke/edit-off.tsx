import React from "react";
const EditOff: React.FC<
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
        d="m12 6 6 6M2 2l20 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.016 15.008 8.036 22H2.058v-5.992l6.963-7.002m7.599 4.377 5.375-5.368a.01.01 0 0 0 0-.014l-5.989-5.996a.016.016 0 0 0-.022 0l-5.378 5.394"
      />
    </svg>
  );
};
export default EditOff;
