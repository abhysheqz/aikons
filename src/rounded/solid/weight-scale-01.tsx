import React from "react";
const WeightScale_01: React.FC<
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
        d="M4.25 15a7.75 7.75 0 0 1 15.5 0v3.889c0 1.156-.182 2.19-.875 2.91-.698.726-1.74.951-2.986.951H8.11c-1.156 0-2.19-.182-2.91-.874-.726-.699-.951-1.74-.951-2.987zM12 11.75A3.25 3.25 0 0 0 8.75 15a.75.75 0 0 1-1.5 0 4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 12 11.75m1.67 3.586a.75.75 0 1 0-1.34-.671l-1 2a.75.75 0 0 0 1.34.67z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.726 1.25c.312 0 .606 0 .841.027.234.026.597.095.868.394.124.136.218.3.271.48.12.406-.033.758-.143.964s-.37.574-.54.816c-.42.596-.748 1.061-1.226 1.364a3 3 0 0 1-.497.251c-.524.205-1.102.205-1.862.204H7.562c-.76 0-1.338.001-1.862-.204a3 3 0 0 1-.497-.25c-.478-.304-.805-.769-1.225-1.365-.171-.242-.431-.611-.54-.816-.111-.206-.265-.558-.144-.964.053-.18.147-.344.271-.48.271-.299.634-.368.868-.394.235-.027.53-.027.84-.027z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 4a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WeightScale_01;
