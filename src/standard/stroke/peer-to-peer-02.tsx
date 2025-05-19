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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 4h5a2 2 0 0 1 2 2v3.087a.41.41 0 0 1-.412.412v0a.4.4 0 0 1-.231-.071l-1.51-1.025M12 20H7a2 2 0 0 1-2-2v-3.09a.41.41 0 0 1 .41-.41v0c.084 0 .165.025.234.072l1.51 1.037"
      />
      <path
        fill="currentColor"
        d="M9.003 11v.75a.75.75 0 0 0 .75-.75zM2 11h-.75c0 .414.336.75.75.75zm7.003-.75H2v1.5h7.003zM2.75 11a2.75 2.75 0 0 1 2.752-2.75v-1.5A4.25 4.25 0 0 0 1.25 11zm2.752-2.75A2.75 2.75 0 0 1 8.253 11h1.5a4.25 4.25 0 0 0-4.251-4.25zm1-4.5a1 1 0 0 1-1.001 1v1.5A2.5 2.5 0 0 0 8 3.75zm-1.001 1a1 1 0 0 1-1.001-1H3a2.5 2.5 0 0 0 2.5 2.5zm-1.001-1a1 1 0 0 1 1-1v-1.5A2.5 2.5 0 0 0 3 3.75zm1-1a1 1 0 0 1 1.002 1h1.5A2.5 2.5 0 0 0 5.5 1.25zM22.003 22v.75a.75.75 0 0 0 .75-.75zM15 22h-.75c0 .414.336.75.75.75zm7.003-.75H15v1.5h7.003zM15.75 22a2.75 2.75 0 0 1 2.752-2.75v-1.5A4.25 4.25 0 0 0 14.25 22zm2.752-2.75A2.75 2.75 0 0 1 21.253 22h1.5a4.25 4.25 0 0 0-4.251-4.25zm1-4.5a1 1 0 0 1-1.001 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1.001 1a1 1 0 0 1-1.001-1H16a2.5 2.5 0 0 0 2.5 2.5zm-1.001-1a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5zm1-1a1 1 0 0 1 1.002 1h1.5a2.5 2.5 0 0 0-2.501-2.5z"
      />
    </svg>
  );
};
export default PeerToPeer_02;
