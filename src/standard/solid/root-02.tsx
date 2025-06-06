import React from "react";
const Root_02: React.FC<
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
        d="M4 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1.5a1 1 0 1 1 0 2H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h1.5a1 1 0 0 1 0 2zm13.5-1a1 1 0 0 1 1-1H20a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.25 10.032a1 1 0 1 1 .5 1.936c-.146.038-.36.18-.55.432l-.53.706.448.894.006.008a1 1 0 0 1-.242 1.985 2.01 2.01 0 0 1-1.553-1.099v-.002c-.363.453-.901.901-1.579 1.076a1 1 0 1 1-.5-1.936c.146-.038.36-.18.55-.432l.53-.706-.448-.894-.004-.007A1 1 0 0 1 14 10c.396 0 .764.118 1.073.354.29.222.475.505.598.752m1.579-1.074c-.678.175-1.216.624-1.578 1.076zm-1.578 1.076-.001-.002z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.826 8.403A2 2 0 0 1 12.736 7H18a1 1 0 1 1 0 2h-5.265l-2.28 7.298a1 1 0 0 1-1.85.15l-1.379-2.76-.519.52a1 1 0 0 1-1.414-1.415l.519-.519a2 2 0 0 1 3.203.52l.27.54z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Root_02;
