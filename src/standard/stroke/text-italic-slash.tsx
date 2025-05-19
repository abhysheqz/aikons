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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 3 18 18M11.487 20.001H8.493m-2.993 0h2.993M12.5 4h5.502a1 1 0 0 1 .968 1.242L18.78 6M12.5 4l-.913 3.6M12.5 4H8m.493 16.001 2.214-8.876"
      />
    </svg>
  );
};
export default TextItalicSlash;
