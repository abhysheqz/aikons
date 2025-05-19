import React from "react";
const Suit_02: React.FC<
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
        strokeWidth={1.5}
        d="m18 4 3.059.717a1 1 0 0 1 .752 1.169l-2.49 12.505A2 2 0 0 1 17.362 20H17M6 4l-3.059.717a1 1 0 0 0-.752 1.169l2.49 12.505A2 2 0 0 0 6.638 20H7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 7 1.571 2.5L9 18l3 4 3-4-2.572-8.5L14 7"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5 8 2 6 4l3 4zm0 0 4-3 2 2-3 4z"
      />
    </svg>
  );
};
export default Suit_02;
