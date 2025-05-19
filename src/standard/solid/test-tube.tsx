import React from "react";
const TestTube: React.FC<
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
        d="M11.845 1.97c.331-.332.886-.72 1.655-.72.6 0 1.28.135 1.814.611.404.36.654.85.759 1.447 1.997.341 3.349 2.13 3.625 3.992.862.128 1.577.5 2.104 1.07.653.71.948 1.655.948 2.63 0 2.13-1.858 3.75-4.014 3.75-1.91 0-3.586-1.272-3.943-3.044a5.23 5.23 0 0 1-4.537-4.956H9A.75.75 0 0 1 8.25 6c0-.881.222-1.592.595-2.15.369-.554.856-.914 1.32-1.146a4.4 4.4 0 0 1 1.408-.421c.072-.097.163-.205.272-.313"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.75 6a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 4.75 6"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 5.25a.75.75 0 0 1 .75.75v4.134a4.75 4.75 0 0 1-.426 1.965l-.16.352c.673.245 1.162.668 1.548 1.012.622.555.893.787 1.288.787.274 0 .621-.149.959-.374.157-.104.289-.21.381-.29l.009-.007-.673-1.48a4.75 4.75 0 0 1-.426-1.965V6a.75.75 0 0 1 1.5 0v4.134c0 .463.1.922.291 1.344l4 8.798a1.75 1.75 0 0 1-1.594 2.474H3.553a1.75 1.75 0 0 1-1.593-2.474l3.999-8.798a3.25 3.25 0 0 0 .291-1.344V6A.75.75 0 0 1 7 5.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TestTube;
