import React from "react";
const Vest: React.FC<
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
        d="M9 1.25h6a.75.75 0 0 1 .335.079l3.618 1.806-.265.644c-.29.708-.4 2.012-.125 3.366.273 1.348.888 2.567 1.862 3.237l.325.223V20a.75.75 0 0 1-.471.696l-5 2a.75.75 0 0 1-.903-.28l-1.614-2.42 3.716-6.445L12.83 5.16l1.034-2.41h-3.718l4.653 10.7-5.152 8.931a.75.75 0 0 1-.925.316l-5-2A.75.75 0 0 1 3.25 20v-9.394l.325-.224c.974-.67 1.59-1.889 1.862-3.237.274-1.354.166-2.658-.125-3.366l-.265-.644 3.618-1.806A.75.75 0 0 1 9 1.249m2.5 11.25h-2v2h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Vest;
