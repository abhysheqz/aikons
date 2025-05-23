import React from "react";
const Skull: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 13.984-1.559.933c-1.036.621-1.996.037-2.938-.433a2 2 0 0 0-1.954.093c-.854.585-2.39 2.115-3.549 1.903-3.321-.606-5.5-3.683-5.5-7C2 4.668 6.663 2 10.956 2 14.413 2 20 3.997 20 8.99c0 1.51-1 1.998-1 1.998l3 2.996L20.5 16l.78 3.592c.321 1.491-1.096 2.773-2.558 2.313l-4.497-1.412a2.99 2.99 0 0 1-2.048-2.312l-.677-3.7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 19s-2 0-2.5-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 9.02s-1.862 0-2.693 1.309c-.25.392-.632.74-1.084.66C9.018 10.771 7.653 9.997 7 8"
      />
    </svg>
  );
};
export default Skull;
