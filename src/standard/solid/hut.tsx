import React from "react";
const Hut: React.FC<
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
        d="M10.335 1.33a.75.75 0 1 0-.67 1.34q.425.214.84.436A47 47 0 0 0 6.089 6.25h11.824a47 47 0 0 0-4.418-3.144q.416-.222.841-.435a.75.75 0 1 0-.67-1.342q-.854.428-1.665.887a37 37 0 0 0-1.665-.887M19.698 7.75H4.302c-.806.709-1.46 1.33-1.938 1.802a34 34 0 0 0-.855.874l-.046.05-.013.014-.003.004-.002.002A.75.75 0 0 0 2 11.75h20a.75.75 0 0 0 .554-1.255l-.004-.005-.013-.014-.046-.05-.177-.188a34 34 0 0 0-.678-.686 47 47 0 0 0-1.938-1.802"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 22a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 13.05h17.5V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm7 4.45a1.75 1.75 0 1 1 3.5 0V22a.75.75 0 0 0 1.5 0v-4.5a3.25 3.25 0 0 0-6.5 0V22a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hut;
