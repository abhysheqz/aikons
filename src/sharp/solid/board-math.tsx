import React from "react";
const BoardMath: React.FC<
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
        d="M3 1.5a.75.75 0 0 0-.75.75v14h19.5v-14A.75.75 0 0 0 21 1.5zm10.5 7h-3V10h3zM8.394 6.612a.75.75 0 0 1 .356.638v5h-1.5V8.464l-.915.457-.67-1.342 2-1a.75.75 0 0 1 .73.033m9.356.638a.75.75 0 0 0-1.085-.67l-2 1 .67 1.34.915-.456v3.786h1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.382 17.053H1.5v-2h21v2h-3.882l2.276 4.553-1.788.894-2.724-5.447H13v3h-2v-3H7.618L4.894 22.5l-1.788-.894z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BoardMath;
