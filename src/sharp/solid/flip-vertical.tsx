import React from "react";
const FlipVertical: React.FC<
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
        d="M12 14.25a.75.75 0 0 1 .61.314l5 7A.75.75 0 0 1 17 22.75H7a.75.75 0 0 1-.61-1.186l5-7a.75.75 0 0 1 .61-.314M6.333 1.657A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 .61 1.186l-5 7a.75.75 0 0 1-1.22 0l-5-7a.75.75 0 0 1-.057-.78"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 13H3v-2h4zm7 0h-4v-2h4zm7 0h-4v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FlipVertical;
