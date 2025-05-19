import React from "react";
const StudyLamp: React.FC<
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
        d="M2 13a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.584 7.814-7 5-1.162-1.627 7-5zM6 22a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.419 14.186a1 1 0 0 1 1.395.233l5 7a1 1 0 0 1-1.628 1.162l-5-7a1 1 0 0 1 .233-1.395M11.723 2.513a1.75 1.75 0 0 1 2.409-.646l1.178.692a8.3 8.3 0 0 1 1.784-.677c.94-.24 2.09-.36 3.198-.06.534.144.887.538 1.03.99.137.438.081.927-.152 1.338l-4.164 7.337a1.7 1.7 0 0 1-1.096.822 1.47 1.47 0 0 1-1.39-.417c-.795-.823-1.26-1.886-1.522-2.826a8.6 8.6 0 0 1-.312-1.907l-1.213-.713a1.75 1.75 0 0 1-.635-2.372z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.664 10.585a3.09 3.09 0 0 0 2.44-1.562c.527-.929.533-2.02.105-2.922z"
      />
    </svg>
  );
};
export default StudyLamp;
