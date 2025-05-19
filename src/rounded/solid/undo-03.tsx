import React from "react";
const Undo_03: React.FC<
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
        d="M7.605 4.796a1 1 0 0 0-1.21-1.592l-1.154.876-.06.046C4.284 4.808 3.525 5.384 3 5.916 2.448 6.475 2 7.136 2 8s.448 1.525 1 2.084c.525.532 1.284 1.109 2.181 1.79l1.214.922a1 1 0 1 0 1.21-1.592l-1.154-.877C5.715 9.767 5.168 9.351 4.767 9H15a5 5 0 0 1 0 10h-4a1 1 0 1 0 0 2h4a7 7 0 1 0 0-14H4.767c.401-.35.948-.768 1.684-1.327z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Undo_03;
