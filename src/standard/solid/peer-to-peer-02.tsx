import React from "react";
const PeerToPeer_02: React.FC<
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
        d="M2.75 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M1 10.75A4.25 4.25 0 0 1 5.252 6.5a4.25 4.25 0 0 1 4.251 4.25.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75M11.25 4.5h5c.69 0 1.25.56 1.25 1.25V8.2l-.983-.667a.75.75 0 0 0-.842 1.24l1.51 1.026A1.162 1.162 0 0 0 19 8.838V5.75A2.75 2.75 0 0 0 16.25 3h-5a.75.75 0 0 0 0 1.5M6.48 15.979l-.98-.673v2.445c0 .69.56 1.25 1.25 1.25h5a.75.75 0 0 1 0 1.5h-5A2.75 2.75 0 0 1 4 17.75v-3.09a1.161 1.161 0 0 1 1.818-.956l1.51 1.037a.75.75 0 0 1-.849 1.237M18.25 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m.002 5.5A4.25 4.25 0 0 0 14 21.75c0 .414.336.75.75.75h7.003a.75.75 0 0 0 .75-.75 4.25 4.25 0 0 0-4.251-4.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PeerToPeer_02;
