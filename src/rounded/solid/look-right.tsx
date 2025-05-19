import React from "react";
const LookRight: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12q0 .6-.065 1.185c-.018.172-.028.258-.084.327s-.139.095-.303.148c-1.208.39-2.49.59-3.298.59-1.536 0-2.83-.372-3.584-.874a.75.75 0 0 0-.832 1.248c1.071.713 2.682 1.126 4.416 1.126.593 0 1.359-.084 2.174-.25.495-.1.742-.15.857-.009.114.142.02.357-.167.789A10.75 10.75 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12m13.5-3c0-.69.558-1.25 1.245-1.25h.01c.687 0 1.245.56 1.245 1.25s-.558 1.25-1.245 1.25h-.01c-.687 0-1.245-.56-1.245-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LookRight;
