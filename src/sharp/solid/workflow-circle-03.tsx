import React from "react";
const WorkflowCircle_03: React.FC<
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
        d="M8.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 9V8h2v1.04c0 .459.001.751.019.975.017.217.046.288.059.315.109.225.342.45.697.575.087.031.224.061.507.078.29.017.663.017 1.218.017H19a1 1 0 0 1 1 1v4h-2v-3h-2.529c-.519 0-.951 0-1.306-.02a3.8 3.8 0 0 1-1.06-.19A3.4 3.4 0 0 1 12 12.145c-.32.282-.698.5-1.106.645a3.8 3.8 0 0 1-1.059.19C9.48 13 9.048 13 8.53 13H6v3H4v-4a1 1 0 0 1 1-1h3.5c.555 0 .929 0 1.218-.017.283-.017.42-.047.507-.078.355-.126.588-.35.697-.575.013-.027.042-.098.059-.315.018-.227.019-.524.019-.993z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
    </svg>
  );
};
export default WorkflowCircle_03;
