import React from "react";
const PerplexityAi: React.FC<
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
        d="M10 5.298 5.488 1.43A.75.75 0 0 0 4.25 2v4H10zM14 6h5.75V2a.75.75 0 0 0-1.238-.57L14 5.299zm-1.25-4a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0zM3 7.25h6.858l-5.21 4.776A2 2 0 0 0 4 13.5v3.25H3a.75.75 0 0 1-.75-.75V8A.75.75 0 0 1 3 7.25m18 9.5h-1V13.5a2 2 0 0 0-.649-1.474l-5.21-4.776H21a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75M5.493 12.948 10 8.816v9.535l-3.493 3.202A.75.75 0 0 1 5.25 21v-7.5c0-.21.088-.41.243-.552m12 8.605L14 18.351V8.816l4.507 4.132a.75.75 0 0 1 .243.553V21a.75.75 0 0 1-1.257.552"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PerplexityAi;
