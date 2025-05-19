import React from "react";
const WorkflowCircle_05: React.FC<
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
        d="M6 7a1 1 0 0 1 1 1v3h7c.717 0 1.194 0 1.56-.03.356-.03.518-.081.621-.134a1.5 1.5 0 0 0 .656-.655c.052-.103.103-.265.132-.62C17 9.194 17 8.717 17 8a1 1 0 1 1 2 0v.04c0 .666 0 1.226-.037 1.683-.04.48-.124.934-.344 1.366a3.5 3.5 0 0 1-1.53 1.53c-.432.22-.887.305-1.366.344-.457.037-1.017.037-1.683.037H7v3a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M14.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M2.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
    </svg>
  );
};
export default WorkflowCircle_05;
