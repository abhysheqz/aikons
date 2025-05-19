import React from "react";
const WorkflowCircle_04: React.FC<
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
        d="M6 7a1 1 0 0 1 1 1v4.173c.278-.094.558-.133.838-.152C8.15 12 8.529 12 8.968 12H15c.48 0 .79 0 1.026-.017.228-.015.315-.042.357-.06a1 1 0 0 0 .52-.493l.005-.032q.015-.11.03-.317c.02-.274.034-.627.043-1.011C17 9.305 17 8.467 17 8a1 1 0 1 1 2 0v.003c0 .465 0 1.325-.02 2.116-.009.395-.024.785-.047 1.106-.011.16-.026.314-.045.45a2 2 0 0 1-.116.473 3 3 0 0 1-1.624 1.624 3.1 3.1 0 0 1-.986.207c-.313.021-.691.021-1.13.021H9c-.48 0-.79 0-1.026.017-.228.015-.315.042-.357.06a1 1 0 0 0-.54.54c-.018.042-.045.129-.06.357C7 15.21 7 15.52 7 16a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M14.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
    </svg>
  );
};
export default WorkflowCircle_04;
