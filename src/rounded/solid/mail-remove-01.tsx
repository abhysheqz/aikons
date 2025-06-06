import React from "react";
const MailRemove_01: React.FC<
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
        d="M9.318 1.662c1.956-.05 3.409-.05 5.364 0l.075.002c1.51.038 2.751.069 3.752.243.37.064.72.15 1.05.266a1 1 0 0 1 .25.096 4.2 4.2 0 0 1 1.406.938c.75.752 1.108 1.628 1.29 2.673.17.982.196 2.193.227 3.66l.002.075c.013.613.018 1.05.015 1.527a.99.99 0 0 1-1.014.978 1.01 1.01 0 0 1-.984-1.021c.002-.447-.003-.86-.015-1.442-.016-.75-.03-1.383-.056-1.93-.02-.406-.03-.608-.176-.69-.147-.08-.328.022-.689.227l-4.235 2.4c-1.3.737-2.399 1.214-3.58 1.214S9.72 10.4 8.42 9.664l-4.236-2.4c-.36-.205-.541-.307-.688-.226s-.156.284-.176.69c-.026.546-.04 1.18-.056 1.93-.02.969-.02 1.47 0 2.44.033 1.56.059 2.62.2 3.435.134.768.356 1.224.737 1.606.377.378.84.605 1.633.743.838.145 1.931.175 3.534.216.581.014 1.117.024 1.634.03.551.006.998.453.998 1.004a.99.99 0 0 1-.998.993 118 118 0 0 1-1.684-.031l-.075-.002c-1.51-.038-2.751-.07-3.752-.243-1.063-.185-1.952-.545-2.706-1.3-.75-.752-1.108-1.628-1.29-2.674-.17-.982-.196-2.193-.227-3.659l-.002-.075a50 50 0 0 1 0-2.527l.002-.075c.03-1.466.057-2.677.227-3.659.182-1.045.54-1.921 1.29-2.673.754-.755 1.643-1.115 2.706-1.3 1-.174 2.242-.205 3.752-.243z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.707 13.668a1 1 0 0 1 0 1.414l-2.793 2.793 2.793 2.793a1 1 0 0 1-1.414 1.414L17.5 19.29l-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 1.414-1.414L17.5 16.46l2.793-2.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailRemove_01;
