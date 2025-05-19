import React from "react";
const ArtificialIntelligence_03: React.FC<
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
        d="M3.38 11.684a.1.1 0 0 0-.08.125c.147.552.324 1.054.508 1.48a8.65 8.65 0 0 0 2.442 3.337V22c0 .414.335.75.75.75h9a.75.75 0 0 0 .75-.75v-2.65l2.033.254a1.75 1.75 0 0 0 1.967-1.737v-2.992l1.7-1.275a.75.75 0 0 0 .174-1.016l-1.877-2.816A8.75 8.75 0 0 0 12 1.25c-1.061 0-1.986.132-2.647.265a12 12 0 0 0-1.064.265l-.018.006H8.27c-.741.21-1.43.545-2.05.966a.1.1 0 0 0 0 .163l.459.317a.1.1 0 0 0 .057.018H10a2.25 2.25 0 0 1 1.63 3.801.11.11 0 0 0 0 .148A2.25 2.25 0 0 1 10 11H4.773a.1.1 0 0 0-.067.025 3 3 0 0 1-1.327.659M1.25 3.25a1.5 1.5 0 1 1 2.995.123l1.99 1.377H10a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.427-.133l-2.182-1.51A1.5 1.5 0 0 1 1.25 3.25m1.5 4a1.5 1.5 0 1 0 1.3 2.25H10A.75.75 0 0 0 10 8H4.05a1.5 1.5 0 0 0-1.3-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_03;
