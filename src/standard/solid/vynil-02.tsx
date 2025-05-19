import React from "react";
const Vynil_02: React.FC<
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
        d="M16.75 3.709a12 12 0 0 0-2.553-1.1A10.3 10.3 0 0 0 11.5 2.25C5.84 2.25 1.25 6.84 1.25 12.5S5.84 22.75 11.5 22.75c5.1 0 9.463-3.729 10.24-8.632l.002-.011c.177-1.228.12-3.024-.499-4.868q.007.129.007.261a4.75 4.75 0 0 1-7.636 3.773 2.25 2.25 0 1 1-1.802-3.001 4.75 4.75 0 0 1 4.938-5.515zM11.5 11.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.72 1.793A.75.75 0 0 0 18.25 2v4.76a3.25 3.25 0 1 0 1.483 2.4.8.8 0 0 0 .017-.16V5.061q.205.244.446.456c.465.408 1.07.733 1.804.733a.75.75 0 0 0 0-1.5c-.264 0-.532-.112-.816-.361-.289-.253-.553-.613-.78-1.012a8 8 0 0 1-.675-1.557l-.007-.023z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vynil_02;
