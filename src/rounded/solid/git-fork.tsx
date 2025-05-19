import React from "react";
const GitFork: React.FC<
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
        d="M6 7a1 1 0 0 1 1 1c0 .971.002 1.599.064 2.061.059.434.153.57.229.646s.212.17.646.229C8.4 10.998 9.029 11 10 11h4c.971 0 1.599-.002 2.061-.064.434-.059.57-.153.646-.229s.17-.212.229-.646C16.998 9.6 17 8.971 17 8a1 1 0 1 1 2 0v.066c0 .886 0 1.65-.082 2.262-.088.655-.287 1.284-.797 1.793-.51.51-1.138.709-1.793.797-.612.082-1.376.082-2.262.082H13v3a1 1 0 1 1-2 0v-3H9.934c-.886 0-1.65 0-2.262-.082-.655-.088-1.284-.287-1.793-.797-.51-.51-.709-1.138-.797-1.793C5 9.716 5 8.952 5 8.066V8a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M9.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 6a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GitFork;
