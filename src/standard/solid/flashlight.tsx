import React from "react";
const Flashlight: React.FC<
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
        d="M6.25 4c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v1.25H6.25zm.042 2.75h11.416a6.75 6.75 0 0 1-.847 2.599l-.008.013-1.103 1.845V20A1.75 1.75 0 0 1 14 21.75h-4A1.75 1.75 0 0 1 8.25 20v-8.793L7.147 9.362l-.008-.013a6.75 6.75 0 0 1-.847-2.599M12.75 13a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flashlight;
