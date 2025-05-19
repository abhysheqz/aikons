import React from "react";
const TravelBag: React.FC<
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
        d="M5.25 5.25H4A2.75 2.75 0 0 0 1.25 8v1.25H2A3.25 3.25 0 0 0 5.25 6zm-4 5.5H2A4.75 4.75 0 0 0 6.75 6v-.75h10.501V6a4.75 4.75 0 0 0 4.75 4.75h.749v5.5h-.749a4.75 4.75 0 0 0-4.75 4.75v.75h-10.5V21a4.75 4.75 0 0 0-4.75-4.75H1.25zm0 7V19A2.75 2.75 0 0 0 4 21.75h1.251V21a3.25 3.25 0 0 0-3.25-3.25zm17.501 4H20A2.75 2.75 0 0 0 22.75 19v-1.25h-.749a3.25 3.25 0 0 0-3.25 3.25zm3.999-12.5V8A2.75 2.75 0 0 0 20 5.25h-1.249V6a3.25 3.25 0 0 0 3.25 3.25zM8.72 11.47a.75.75 0 0 1 1.06 0l.75.75a.75.75 0 0 1 0 1.06l-.75.75a.75.75 0 0 1-1.06 0l-.75-.75a.75.75 0 0 1 0-1.06zm5.719 2.922a.75.75 0 0 1 .311.608v1.5a.75.75 0 0 1-1.166.624l-1.5-1a.75.75 0 0 1 .179-1.335l1.5-.5a.75.75 0 0 1 .676.103M15.75 11a1.25 1.25 0 1 0-2.5 0v.01a1.25 1.25 0 1 0 2.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.847 3.75a.25.25 0 0 0-.246.209L9.24 6.123a.75.75 0 0 1-1.48-.246l.36-2.165A1.75 1.75 0 0 1 9.848 2.25h4.306a1.75 1.75 0 0 1 1.726 1.462l-.74.124.74-.124.36 2.165a.75.75 0 1 1-1.479.246L14.4 3.96a.25.25 0 0 0-.247-.209z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TravelBag;
