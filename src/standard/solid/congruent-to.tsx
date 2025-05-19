import React from "react";
const CongruentTo: React.FC<
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
        d="M3 13a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M7.911 6.012c-.945-.084-1.987.256-3.164 1.58a1 1 0 1 1-1.494-1.33c1.49-1.675 3.114-2.396 4.836-2.242 1.638.146 3.165 1.071 4.546 2.208 1.286 1.057 2.425 1.668 3.454 1.76.945.084 1.987-.256 3.164-1.58a1 1 0 0 1 1.494 1.33c-1.49 1.675-3.114 2.395-4.836 2.242-1.638-.146-3.165-1.071-4.546-2.208-1.286-1.058-2.425-1.668-3.454-1.76"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CongruentTo;
