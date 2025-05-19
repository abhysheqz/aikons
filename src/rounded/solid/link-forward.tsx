import React from "react";
const LinkForward: React.FC<
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
        d="M12.75 4.696a1.446 1.446 0 0 1 2.506-.984l5.953 6.411a2.023 2.023 0 0 1 0 2.754l-5.953 6.41a1.446 1.446 0 0 1-2.506-.983v-3.027c-4.681.337-7.247 3.76-7.928 4.815a1.43 1.43 0 0 1-1.195.658c-.76 0-1.377-.617-1.377-1.378V18.5c0-5.853 4.678-10.614 10.5-10.747z"
      />
    </svg>
  );
};
export default LinkForward;
