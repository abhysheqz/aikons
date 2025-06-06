import React from "react";
const Paella: React.FC<
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
        strokeWidth={1.5}
        d="M21.5 12a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 9c-1.6 0-3 1-3 1 .167.5 1 1.5 3 1.5M12 9c2 0 3 1 3 2.5 0 1.04-.722 1.841-2 2.4M12 9c.8 1.2.333 2.167 0 2.5m-1 3c.765-.153 1.437-.353 2-.6m-1-2.4c.833.1 2.2.72 1 2.4M14 6v.01M18 13.49v.01M16.5 16.49v.01M8 17v.01M6 9v.01M13.99 18s-.679.558-1.453.622c-.774.065-1.537-.374-1.537-.374M8.342 7.34s.376-.795 1.049-1.184 1.549-.317 1.549-.317M16.518 8.25s.853.212 1.366.795c.514.582.617 1.456.617 1.456M8.442 14.444s-.856-.2-1.377-.776c-.522-.576-.636-1.448-.636-1.448M7 3.133l-.566-.567a1.934 1.934 0 0 0-2.735 0L2.566 3.7a1.934 1.934 0 0 0 0 2.735L3.133 7M17 20.867l.566.567c.756.755 1.98.755 2.735 0l1.133-1.133a1.933 1.933 0 0 0 0-2.735L20.867 17"
      />
    </svg>
  );
};
export default Paella;
