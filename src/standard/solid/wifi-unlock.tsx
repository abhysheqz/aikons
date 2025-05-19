import React from "react";
const WifiUnlock: React.FC<
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
        d="M7.793 14.793c1.34-1.34 3.092-1.945 4.814-1.76a1 1 0 0 1-.214 1.988c-1.101-.118-2.26.26-3.186 1.186a1 1 0 0 1-1.414-1.414M9.946 8.214c1.833-.432 3.684-.207 5.481.642a1 1 0 1 1-.854 1.808c-1.42-.67-2.81-.823-4.169-.503-1.372.323-2.786 1.146-4.2 2.549a1 1 0 0 1-1.408-1.42c1.603-1.591 3.33-2.648 5.15-3.076"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3c3.695 0 7.338 1.443 10.645 4.236a1 1 0 1 1-1.29 1.528C18.346 6.224 15.147 5 12 5S5.654 6.223 2.645 8.764a1 1 0 0 1-1.29-1.528C4.662 4.443 8.305 3 12 3M18.5 12.75c-.69 0-1.25.56-1.25 1.25v.75H22a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75h.75V14a2.75 2.75 0 0 1 4.812-1.82.75.75 0 1 1-1.124.993 1.25 1.25 0 0 0-.938-.423"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiUnlock;
