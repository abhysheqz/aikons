import React from "react";
const Pavilon: React.FC<
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
        d="M7.182 13.75c-.667 0-1.317-.1-1.932-.289v8.04c0 .413.336.75.75.75h12a.75.75 0 0 0 .75-.75v-8.04a6.6 6.6 0 0 1-1.932.29zm2.82 2.416a.75.75 0 0 0-.746.667l-.5 4.5 1.49.166.426-3.833h2.653l.431 3.834 1.49-.168-.506-4.5a.75.75 0 0 0-.745-.665z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 22.25H3v-1.5h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12 1.75c.343 0 .642.234.725.568.431 1.733 2.67 5.432 8.239 5.432H22l-.328.987a5.12 5.12 0 0 1-4.854 3.513H7.182a5.12 5.12 0 0 1-4.854-3.513L2 7.75h1.036c5.569 0 7.808-3.699 8.24-5.432A.75.75 0 0 1 12 1.75"
      />
    </svg>
  );
};
export default Pavilon;
