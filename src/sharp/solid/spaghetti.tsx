import React from "react";
const Spaghetti: React.FC<
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
        d="M7.418 12.25a1.75 1.75 0 0 1 3.164 0h1.581a3.251 3.251 0 0 0-6.326 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 7.75A5.25 5.25 0 0 0 3.75 13h-1.5a6.75 6.75 0 1 1 13.5 0h-1.5c0-2.9-2.35-5.25-5.25-5.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.582 12.25H7.418a1.74 1.74 0 0 0-.168.75h-1.5q0-.388.087-.75H2a.75.75 0 0 0-.75.75c0 1.38.769 2.848 2.073 3.5l2.163 1.082 1.89 2.834A.75.75 0 0 0 8 20.75h8a.75.75 0 0 0 .624-.334l1.89-2.834 2.163-1.082c1.304-.652 2.073-2.12 2.073-3.5a.75.75 0 0 0-.75-.75h-9.837q.086.362.087.75v3h-1.5v-3c0-.268-.06-.523-.168-.75"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.03 8.75c-.785 0-1.518.215-2.146.59l-.768-1.289a5.7 5.7 0 0 1 2.914-.802c3.163 0 5.72 2.579 5.72 5.75h-1.5c0-2.351-1.894-4.25-4.22-4.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.083 4.815c-1.56-.326-3.03.59-3.354 1.918L8.27 6.377c.539-2.203 2.862-3.502 5.12-3.03 2.27.474 3.794 2.603 3.25 4.83l-1.457-.356c.318-1.303-.555-2.683-2.1-3.006"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Spaghetti;
