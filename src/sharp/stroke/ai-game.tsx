import React from "react";
const AiGame: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 7.5h.263a3 3 0 0 1 2.988 2.725l.741 8.061a3 3 0 0 1-2.991 3.214h-.747a3 3 0 0 1-2.784-1.886L14.225 16.5h-4.45L8.53 19.614A3 3 0 0 1 5.746 21.5h-.747a3 3 0 0 1-2.991-3.214l.747-8.063A3 3 0 0 1 5.743 7.5H6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 12.5h.009M7 12.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m11.998 2.5.258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841l.697.258-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705l-.258.697-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.79-.503-1.705-.841L8.498 6l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
    </svg>
  );
};
export default AiGame;
