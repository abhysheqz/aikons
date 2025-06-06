import React from "react";
const RepeatOne_02: React.FC<
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
        d="M22.357 2.187c.424.26.643.722.643 1.182v6.63a1 1 0 0 1-2 0V4.914l-.323.297a1 1 0 1 1-1.354-1.472l1.52-1.4a1.25 1.25 0 0 1 1.514-.15"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.33 21.697a1 1 0 0 1-1.414.02l-1.002-.976c-.191-.186-.442-.429-.588-.619-.13-.166-.501-.688-.228-1.328.266-.627.884-.733 1.09-.761.238-.033.537-.033.808-.033h7.812c2.778 0 5.101-1.761 5.898-4.166.157-.472.573-.834 1.071-.834.616 0 1.098.544.93 1.138-.96 3.394-4.15 5.862-7.9 5.862H8.615v1a1 1 0 0 1-.284.697M3.874 16.813a1 1 0 0 1-1.395-.23A7.84 7.84 0 0 1 1.002 12c0-4.444 3.694-8 8.194-8h4.194V3a1 1 0 0 1 1.697-.717l1.003.976c.191.186.442.429.588.619.13.166.501.688.228 1.328-.266.627-.884.733-1.09.761a6 6 0 0 1-.809.033H9.196c-3.447 0-6.194 2.712-6.194 6 0 1.27.406 2.446 1.102 3.417a1 1 0 0 1-.23 1.396"
      />
    </svg>
  );
};
export default RepeatOne_02;
