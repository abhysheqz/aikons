import React from "react";
const CallIncoming_02: React.FC<
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
        d="M6.497 2.106a2 2 0 0 0-3.203-.52L1.861 3.02a2.88 2.88 0 0 0-.858 2.17c.444 9.244 7.859 16.659 17.103 17.102a2.88 2.88 0 0 0 2.17-.858L21.707 20a2 2 0 0 0-.52-3.203l-4.114-2.057a2 2 0 0 0-2.309.375L11.45 18.43a16.07 16.07 0 0 1-6.586-6.586L8.18 8.53a2 2 0 0 0 .374-2.309zm12.785.492a1 1 0 0 1 1.414 1.414L16.351 8.38l1.621 1.622c.188.187.315.452.208.695a1 1 0 0 1-.915.598h-4.243a1 1 0 0 1-1-1V6.05a1 1 0 0 1 .598-.916c.242-.107.508.021.695.209l1.621 1.621z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallIncoming_02;
