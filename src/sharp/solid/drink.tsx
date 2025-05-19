import React from "react";
const Drink: React.FC<
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
        d="M2.335 5.654A.75.75 0 0 1 3 5.25h14a.75.75 0 0 1 .614 1.18l-7 10a.75.75 0 0 1-1.228 0l-7-10a.75.75 0 0 1-.051-.776"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m6.237 1.288 3 1a.75.75 0 0 1 .503.589l.5 3-1.48.246-.426-2.554-2.571-.857zM9.25 21.25V16h1.5v5.25H12v1.5H8v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.522 4H17a2 2 0 0 1 1.639 3.147L16.85 9.7q.318.049.649.049A4.25 4.25 0 1 0 13.522 4"
      />
    </svg>
  );
};
export default Drink;
