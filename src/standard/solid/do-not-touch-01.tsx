import React from "react";
const DoNotTouch_01: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.5 7.097V13.5l-2.132-2.081a1.736 1.736 0 0 0-2.487.234 1.74 1.74 0 0 0 .008 2.183L8.5 20.5v1.253a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V20.5l1.123-1.404q.198-.249.354-.522l-8.369-8.37V11.5a.45.45 0 0 1-.9 0V9.305zM11.608 8.084l2.534 2.533v-7.35a1.267 1.267 0 0 0-2.534 0zM15.042 11.517l5.441 5.442q.017-.18.017-.362V7.054a1.054 1.054 0 0 0-2.108 0v5.454a.45.45 0 0 1-.9 0V5.225a1.225 1.225 0 1 0-2.45 0v6.292000000000001M10.708 7.184 8.507 4.982a1.104 1.104 0 0 1 2.202.122z"
      />
    </svg>
  );
};
export default DoNotTouch_01;
