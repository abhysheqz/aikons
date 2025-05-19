import React from "react";
const Flag_02: React.FC<
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
        d="m20.75 3.343-1.06.481-.006.003-.026.011a10 10 0 0 1-.476.198c-.316.124-.736.276-1.165.397-1.415.397-3.515.477-5.915-.761-3.639-1.878-7.11-.49-8.566.657a.75.75 0 0 0-.286.59v16.333h2V15.2c1.167-.803 3.355-1.515 6.164-.066 3.742 1.931 7.392.951 8.95.09l.386-.215z"
      />
    </svg>
  );
};
export default Flag_02;
