import React from "react";
const WorkoutBattleRopes: React.FC<
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
        d="M9 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7l-3 1.5-2.166-.217M6.5 21v-4.5L3 13l2-5 2.834.283m0 0L5.19 15.185M20 9c-.583 0-1.133-.27-1.483-.73L17.49 6.922c-.136-.179-.204-.268-.27-.339A1.875 1.875 0 0 0 15 6.21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17a4.5 4.5 0 0 1-3.363-1.518l-.678-.768a6.77 6.77 0 0 0-3.711-2.148m-1.748-.158H10L7.5 10"
      />
    </svg>
  );
};
export default WorkoutBattleRopes;
