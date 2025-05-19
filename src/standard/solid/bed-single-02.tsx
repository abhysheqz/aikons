import React from "react";
const BedSingle_02: React.FC<
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
        d="M11.945 2.001a1 1 0 0 1 .094 0c2.365.105 4.005 1.21 4.995 2.355.38.44.791.649 1.138.649H20a1.5 1.5 0 0 1 1.5 1.5V11.4A3 3 0 0 1 23 14v7a1 1 0 1 1-2 0v-2.995H3V21a1 1 0 1 1-2 0v-7c0-1.11.603-2.08 1.5-2.599V6.505a1.5 1.5 0 0 1 1.5-1.5h1.828c.346 0 .756-.21 1.135-.649.986-1.142 2.612-2.237 4.982-2.355M19.5 7.005V11H17v-.691c0-.563-.32-1.11-.88-1.354C15.472 8.672 13.765 8 12 8s-3.472.672-4.12.955c-.56.244-.88.79-.88 1.354V11H4.5V7.005h1.328c1.142 0 2.057-.656 2.65-1.343.674-.78 1.796-1.562 3.519-1.66 1.707.088 2.842.874 3.525 1.663.593.685 1.509 1.34 2.65 1.34z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedSingle_02;
