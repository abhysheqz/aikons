import React from "react";
const Yoga_01: React.FC<
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
        d="M8.592 16c-.31.682-1.022.986-1.653 1.316l-3.646 1.907C1.828 19.99 2.559 22 4.13 22c3.313 0 6.833-2.425 9.88-3.789a.97.97 0 0 1 .934.085L16 19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 19 1.592-.796a.96.96 0 0 1 .826-.023C13.442 19.539 16.532 22 19.87 22c1.57 0 2.302-2.01.837-2.777l-3.646-1.907c-.631-.33-1.344-.634-1.653-1.316M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 8a6 6 0 0 0-6 6 6 6 0 0 0 6-6m0 0a6 6 0 0 1 6 6 6 6 0 0 1-6-6"
      />
    </svg>
  );
};
export default Yoga_01;
