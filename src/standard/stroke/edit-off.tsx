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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 6 6 6m-7-5 4.292-4.293a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414L17 13m-2 2L8 22H2v-6l7-7M2 2l20 20"
      />
    </svg>
  );
};
export default EditOff;
