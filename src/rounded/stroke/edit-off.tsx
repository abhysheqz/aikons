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
        d="m15 15-4.25 4.068c-1.497 1.486-2.246 2.23-3.182 2.606-.936.377-1.965.35-4.023.294l-.28-.008c-.626-.017-.94-.025-1.121-.238-.183-.213-.158-.542-.108-1.2l.027-.356c.14-1.85.21-2.776.56-3.608S3.58 15.051 4.79 13.7L9 9M11.5 6.674l2.574-2.789c.745-.807 1.117-1.21 1.513-1.446a3.1 3.1 0 0 1 3.103-.047c.403.224.787.616 1.555 1.4.768.785 1.152 1.178 1.37 1.589.529.992.512 2.194-.045 3.17-.23.404-.625.785-1.416 1.546L17.5 12.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 4 7 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
    </svg>
  );
};
export default EditOff;
