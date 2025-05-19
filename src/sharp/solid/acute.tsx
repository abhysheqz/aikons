import React from "react";
const Acute: React.FC<
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
        d="M15.514 5.042 14.25 1.25l-4.327.618.283 1.98 1.399-.2L1.897 19.53a1 1 0 0 0 .853 1.521l15.691-.002-.29.294 1.42 1.408 2.679-2.702-2.68-2.702-1.42 1.408.292.294-5.517.001q.075-.501.075-1.022c0-2.926-1.807-4.984-4.258-5.862l4.555-7.45.32.96z"
      />
    </svg>
  );
};
export default Acute;
