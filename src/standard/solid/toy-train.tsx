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
        d="M7 16.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <circle cx={17} cy={18} r={2.25} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M11 10a1 1 0 0 1 1-1h4.86a3 3 0 0 1 2.942 2.412l.006.027c.02.106.035.18.053.25q.016.06.026.09a4.67 4.67 0 0 1 2.85 3.793l.257 2.318A1 1 0 0 1 22 19h-1.697q.146-.477.147-1a3.45 3.45 0 1 0-6.753 1H12a1 1 0 0 1-1-1zm4 1.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 3a1 1 0 0 1 1 1v13h.72a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1m9 0a1 1 0 0 1 1 1v15H9.271a1 1 0 1 1 0-2H11V4a1 1 0 0 1 1-1M14 7a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2v2a1 1 0 1 1-2 0V8a1 1 0 0 1-1-1M5.5 8a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ToyTrain;
