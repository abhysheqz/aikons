import React from "react";
const FlashOff: React.FC<
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
        d="M14.324 1.054a1 1 0 0 1 .674.887l.45 7.649 4.152.415a1 1 0 0 1 .703 1.593l-1.501 2.014a1 1 0 1 1-1.604-1.194l.446-.598-3.243-.325a1 1 0 0 1-.9-.936l-.356-6.063-1.892 2.163a1 1 0 0 1-1.506-1.317l3.5-4a1 1 0 0 1 1.077-.288M8.471 7.5a1 1 0 0 1 .736.293l7 7a1 1 0 0 1 .056 1.353l-5.499 6.5A1 1 0 0 1 9.001 22v-8H4.5a1 1 0 0 1-.747-1.665l4-4.5A1 1 0 0 1 8.47 7.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlashOff;
