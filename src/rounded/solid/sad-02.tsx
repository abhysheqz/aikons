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
        d="M3.383 16.62a2.085 2.085 0 0 0 .015 3.009c.888.838 2.33.824 3.204-.017.87-.84.857-2.181 0-3.008l-.006-.005-1.58-1.552z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 1.206.198 2.366.565 3.448.073.216.358.258.52.1l.005-.005L4.5 13.46a.75.75 0 0 1 1.047.005l2.098 2.06a3.57 3.57 0 0 1-.003 5.167l-.018.017c-.394.375-.592.563-.564.721.028.16.236.25.651.43 1.314.573 2.764.89 4.289.89 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25M6.75 8.441c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m7.99 0c0-.69.56-1.25 1.25-1.25H16a1.25 1.25 0 0 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25M12 14.25c-1.046 0-2.03.28-2.876.77a.75.75 0 0 0 .752 1.298A4.2 4.2 0 0 1 12 15.75c.958 0 1.84.316 2.55.85a.75.75 0 0 0 .9-1.2A5.73 5.73 0 0 0 12 14.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sad_02;
