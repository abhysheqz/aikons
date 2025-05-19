import React from "react";
const Sad_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.393.265 2.725.748 3.946q.177-.249.404-.472l.01-.01 1.633-1.574a1.4 1.4 0 0 1 1.952.01l1.576 1.547a3.47 3.47 0 0 1 0 5.024 3.7 3.7 0 0 1-1.122.738A10.7 10.7 0 0 0 12 22.75c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25M6.75 8.441c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 1 1 0 2.5H8c-.69 0-1.25-.56-1.25-1.25m7.991 0c0-.69.56-1.25 1.25-1.25H16a1.25 1.25 0 1 1 0 2.5h-.009c-.69 0-1.25-.56-1.25-1.25m-2.74 5.809c-1.047 0-2.03.28-2.877.77a.75.75 0 0 0 .752 1.298A4.2 4.2 0 0 1 12 15.75c.958 0 1.84.316 2.55.85a.75.75 0 0 0 .9-1.2A5.73 5.73 0 0 0 12 14.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.383 16.472a2.085 2.085 0 0 0 .016 3.009c.887.838 2.33.824 3.203-.018.87-.839.858-2.18 0-3.008l-.005-.004-1.58-1.553z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sad_02;
