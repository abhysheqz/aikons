import React from "react";
const WorkoutSquats: React.FC<
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
        d="M13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.948 21l1.13-3.409c.404-1.216.606-1.824.304-2.245-.301-.42-.94-.42-2.215-.42H8.933M18 8.346l-3.064 1.886a1 1 0 0 1-.909.071l-2.367-.986m-2.727 5.609H7.925c-.948 0-1.423 0-1.725-.373s-.216-.793-.043-1.633c.25-1.21 1.017-3.1 1.904-4.362.245-.348.702-.448 1.095-.285l2.504 1.044m-2.727 5.609c.225-1.227 1.197-4.052 2.727-5.61"
      />
    </svg>
  );
};
export default WorkoutSquats;
