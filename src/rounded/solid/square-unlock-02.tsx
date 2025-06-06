import React from "react";
const SquareUnlock_02: React.FC<
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
        d="M12 8.25c-1.596 0-3.046.034-4.475.1-2.058.095-3.729 1.688-4 3.705-.149 1.1-.275 2.257-.275 3.445s.126 2.344.275 3.445c.271 2.017 1.942 3.61 4 3.705 1.429.066 2.88.1 4.475.1 1.596 0 3.046-.034 4.475-.1 2.058-.095 3.729-1.688 4-3.705.149-1.1.275-2.257.275-3.445s-.126-2.344-.274-3.445c-.272-2.017-1.943-3.61-4.001-3.705A96 96 0 0 0 12 8.25m1 6.25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5a1 1 0 0 1-2 0v-2.5a5.5 5.5 0 0 1 5.5-5.5c2.48 0 4.344 1.869 4.949 3.684a1 1 0 0 1-1.898.632C14.656 4.381 13.438 3.25 12 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareUnlock_02;
