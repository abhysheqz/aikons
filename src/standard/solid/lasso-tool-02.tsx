import React from "react";
const LassoTool_02: React.FC<
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
        d="M7.995 16c-.697 0-.995.457-.995.714 0 .258.298.715.995.715s.995-.457.995-.715S8.692 16 7.995 16M5 16.714C5 15.078 6.488 14 7.995 14c1.494 0 2.97 1.061 2.994 2.675.056.837-.019 3.657-2.915 5.207a1 1 0 1 1-.944-1.764c.38-.203.683-.438.926-.69h-.061C6.488 19.429 5 18.35 5 16.715"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.308 2.278a1 1 0 0 1 1.012-.225l9.975 3.373 7.289-3.335a1 1 0 0 1 1.413.988l-.9 11.375a1 1 0 0 1-.74.888l-9.9 2.625a1 1 0 1 1-.513-1.934l9.215-2.443.71-8.973-6.103 2.792a1 1 0 0 1-.736.038L4.497 4.562 7.46 14.72a1 1 0 1 1-1.92.56l-3.5-12a1 1 0 0 1 .268-1.002"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LassoTool_02;
