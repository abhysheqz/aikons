import React from "react";
const AddMoneyCircle: React.FC<
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
        d="M19.25 2.25a1 1 0 1 0-2 0v2.5h-2.5a1 1 0 1 0 0 2h2.5v2.5a1 1 0 1 0 2 0v-2.5h2.5a1 1 0 1 0 0-2h-2.5zm-5.38 1.429A9.8 9.8 0 0 0 11 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.998-.15-1.962-.429-2.87A2.25 2.25 0 0 1 16 9.25V8h-1.25a2.25 2.25 0 0 1-.88-4.321M11 7.25a.75.75 0 0 1 .75.75v.75h.75A2.25 2.25 0 0 1 14.75 11a.75.75 0 0 1-1.5 0 .75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h3a2.25 2.25 0 0 1 2.25 2.25v.5a2.25 2.25 0 0 1-2.25 2.25h-.75V18a.75.75 0 0 1-1.5 0v-.75H9.5A2.25 2.25 0 0 1 7.25 15a.75.75 0 0 1 1.5 0c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-3a2.25 2.25 0 0 1-2.25-2.25V11A2.25 2.25 0 0 1 9.5 8.75h.75V8a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AddMoneyCircle;
