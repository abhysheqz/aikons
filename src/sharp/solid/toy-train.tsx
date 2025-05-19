import React from "react";
const ToyTrain: React.FC<
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
        d="M8.25 17.083a.917.917 0 1 0 0 1.834.917.917 0 0 0 0-1.834M5.5 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.249 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M14.499 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15 5.25H1.5v-2H15zM9.75 9h-3V7h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 9.25A.75.75 0 0 0 12 10v8c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-5.494a.75.75 0 0 0-.75-.75h-1.992l-.811-2.034a.75.75 0 0 0-.697-.472zM15 13h2v-1.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 4.25v13.533a.96.96 0 0 0 .955.967H6.34v-1.933H4.909V4.25zM13.5 4.25h-1.91v12.5h-1.34v2h3.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.75 6h4v2h-1v2h-2V8h-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ToyTrain;
