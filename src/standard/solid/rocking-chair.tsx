import React from "react";
const RockingChair: React.FC<
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
        d="M3.684 1.052a1 1 0 0 1 1.265.632L6.721 7H16.78a2 2 0 0 1 1.897 1.368l.272.816a1 1 0 0 1-1.898.632L16.78 9H16v4h2a1 1 0 0 1 0 2h-.612l1.092 3.276q.383-.406.707-.858a1 1 0 0 1 1.626 1.164C18.898 21.26 15.654 23 12 23s-6.897-1.74-8.813-4.418a1 1 0 0 1 1.626-1.164q.323.45.708.858l1.115-3.344a1 1 0 0 1 0-1.863L5.06 8.344l-.019-.056-1.99-5.972a1 1 0 0 1 .632-1.264M7.388 9l1.333 4H10V9zM12 13h2V9h-2zm-4.823 6.631 1.544-4.63h6.559l1.543 4.63A9.05 9.05 0 0 1 12 21.001a9.05 9.05 0 0 1-4.823-1.37"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RockingChair;
