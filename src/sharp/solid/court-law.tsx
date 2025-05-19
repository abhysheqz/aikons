import React from "react";
const CourtLaw: React.FC<
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
        d="M12.431 1.386a.75.75 0 0 0-.86 0l-10.002 7a.75.75 0 0 0-.306.756l2.501 13a.75.75 0 0 0 .737.608h15a.75.75 0 0 0 .736-.608l2.5-13a.75.75 0 0 0-.306-.756zm-.962 8.084a.75.75 0 0 1 1.06 0l4.001 4a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1.294-1.292-2.97 2.97-1.414-1.414 2.97-2.97-1.293-1.293a.75.75 0 0 1 0-1.061z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CourtLaw;
