import React from "react";
const Badminton: React.FC<
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
        d="M5.593 16.282a1.526 1.526 0 0 1 1.981.185 1.52 1.52 0 0 1 .147 1.933l-2.565 3.633a2.29 2.29 0 0 1-3.46.325 2.278 2.278 0 0 1 .265-3.498z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.207 11.793a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414l4.5-4.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.394 3.103c-1.57.276-3.174 1.084-4.264 2.174-1.487 1.487-1.603 4.518.235 6.357s4.87 1.722 6.357.236c1.09-1.09 1.898-2.694 2.175-4.264.28-1.59-.012-2.925-.796-3.708-.783-.783-2.117-1.076-3.707-.795m-.348-1.97c1.928-.34 4.042-.077 5.47 1.35s1.69 3.542 1.35 5.47c-.343 1.947-1.33 3.931-2.73 5.33-2.303 2.304-6.602 2.349-9.185-.235s-2.54-6.881-.236-9.185c1.4-1.4 3.384-2.387 5.331-2.73"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Badminton;
