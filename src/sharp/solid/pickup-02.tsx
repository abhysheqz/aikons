import React from "react";
const Pickup_02: React.FC<
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
        d="M7 20.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17 20.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.75a.97.97 0 0 0-.977.967v5.8H2.227a.97.97 0 0 0-.977.966v5.8c0 .534.438.967.977.967h1.056a3.75 3.75 0 1 1 7.434 0h2.566a3.75 3.75 0 1 1 7.434 0h1.056c.54 0 .977-.433.977-.967V14.25H21v-1.5h1.75v-1.267a.96.96 0 0 0-.129-.48l-3.909-6.766a.98.98 0 0 0-.848-.487zm3.91 6.767V5.684h1.388l2.792 4.833z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pickup_02;
