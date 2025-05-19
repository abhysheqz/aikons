import React from "react";
const SaveEnergy_02: React.FC<
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
        d="M12.75 1.25v3h-1.5v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 13.25h19.5v-.75c0-5.967-4.396-9.75-9.75-9.75S2.25 6.533 2.25 12.5zm1.527-1.5C4.12 7.111 7.643 4.25 12 4.25s7.88 2.861 8.223 7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 12.5c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75c0-2.831-.457-5.198-1.241-6.887C14.74 3.96 13.547 2.75 12 2.75S9.259 3.96 8.491 5.613C7.707 7.303 7.25 9.67 7.25 12.5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 12.5v8a2.25 2.25 0 0 1-4.5 0V20h1.5v.5a.75.75 0 0 0 1.5 0v-8zM19.547 14.53l-2.09 2.924h4l-3.782 5.296-1.22-.872 2.088-2.924h-4l3.783-5.296z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SaveEnergy_02;
