import React from "react";
const CallMissed_01: React.FC<
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
        d="M6.497 2.106a2 2 0 0 0-3.203-.52L1.861 3.02a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.858L21.707 20a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.309.375L11.45 18.43a16.07 16.07 0 0 1-6.586-6.586L8.18 8.53a2 2 0 0 0 .374-2.309zm5.485.207a1 1 0 0 0-1 1v3.5a1 1 0 0 0 .598.915c.243.107.508-.021.695-.208l1.25-1.25 2.75 2.75a1 1 0 0 0 1.415 0l5-5a1 1 0 1 0-1.415-1.415l-4.293 4.293-2.042-2.043 1.25-1.25c.187-.187.315-.452.208-.695a1 1 0 0 0-.916-.598z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallMissed_01;
