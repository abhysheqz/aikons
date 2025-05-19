import React from "react";
const Spam: React.FC<
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
        d="M21.553 11.106a2 2 0 0 1 0 1.788l-3.5 7A2 2 0 0 1 16.263 21H7.737a2 2 0 0 1-1.789-1.106l-3.5-7a2 2 0 0 1 0-1.788l3.5-7A2 2 0 0 1 7.737 3h8.527a2 2 0 0 1 1.789 1.106z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 15.5h.009z"
        clipRule="evenodd"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8.5v4"
      />
    </svg>
  );
};
export default Spam;
