import React from "react";
const TextItalicSlash: React.FC<
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
        d="M3.707 2.293a1 1 0 0 0-1.414 1.414l7.395 7.395-1.976 7.899H5.5a1 1 0 1 0 0 2h5.987a1 1 0 1 0 0-2H9.773l1.565-6.25 8.955 8.956a1 1 0 0 0 1.414-1.414zM13.278 5l-.95 3.793-1.65-1.65L11.216 5h-2.68l-2-2h11.467a2 2 0 0 1 1.938 2.484l-.189.758a1 1 0 0 1-1.94-.484l.188-.757z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextItalicSlash;
