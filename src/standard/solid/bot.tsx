import React from "react";
const Bot: React.FC<
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
        d="M5.25 3a1.75 1.75 0 1 1 2.5 1.582V7h-1.5V4.582A1.75 1.75 0 0 1 5.25 3M15.25 3a1.75 1.75 0 1 1 2.5 1.582V7h-1.5V4.582a1.75 1.75 0 0 1-1-1.582"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 9.5A2.75 2.75 0 0 1 6.5 6.75h11a2.75 2.75 0 0 1 2.75 2.75v8a2.75 2.75 0 0 1-2.75 2.75h-.885l-.228 1.139a1.25 1.25 0 0 1-1.952.772l-2.35-1.678a1.25 1.25 0 0 0-.726-.233H6.5a2.75 2.75 0 0 1-2.75-2.75zm5.237 4.953a.75.75 0 0 1 1.06.034c.413.44 1.115.763 1.953.763s1.54-.323 1.953-.763a.75.75 0 1 1 1.094 1.026c-.727.774-1.84 1.237-3.047 1.237s-2.32-.463-3.047-1.237a.75.75 0 0 1 .034-1.06M9 10a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm5.991 0a1 1 0 1 0 0 2H15a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 10.272a3 3 0 0 0 0 5.455zM21.25 15.727a3 3 0 0 0 0-5.456z"
      />
    </svg>
  );
};
export default Bot;
