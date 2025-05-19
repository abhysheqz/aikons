import React from "react";
const Gift: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9M12 5.75V7H8.5A2.5 2.5 0 0 1 6 4.5v-.25A2.25 2.25 0 0 1 8.25 2 3.75 3.75 0 0 1 12 5.75M12 5.75V7h3.5A2.5 2.5 0 0 0 18 4.5v-.25A2.25 2.25 0 0 0 15.75 2 3.75 3.75 0 0 0 12 5.75"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.444 7H3.561c-.582 0-1.054.446-1.056.997l-.005 2C2.499 10.551 2.972 11 3.556 11h16.888c.583 0 1.056-.448 1.056-1V8c0-.552-.473-1-1.056-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11v11"
      />
    </svg>
  );
};
export default Gift;
