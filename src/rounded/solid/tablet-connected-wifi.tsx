import React from "react";
const TabletConnectedWifi: React.FC<
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
        d="M11.036 10.415A7.98 7.98 0 0 1 16.75 8c2.236 0 4.257.926 5.715 2.415a1 1 0 0 1-1.43 1.4A5.98 5.98 0 0 0 16.75 10c-1.67 0-3.184.69-4.285 1.814a1 1 0 1 1-1.43-1.4m2.5 2.552a4.5 4.5 0 0 1 3.214-1.357c1.26 0 2.397.522 3.215 1.357a1 1 0 0 1-1.43 1.4 2.5 2.5 0 0 0-1.785-.758c-.693 0-1.324.286-1.785.757a1 1 0 1 1-1.43-1.4M15.742 16a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.255 2.25H11.12c-2.052 0-3.69 0-4.974.169-1.326.174-2.421.545-3.29 1.395-.872.853-1.253 1.933-1.433 3.24-.173 1.26-.173 2.867-.173 4.873v.146c0 2.006 0 3.613.173 4.874.18 1.306.561 2.386 1.433 3.239.869.85 1.964 1.22 3.29 1.395 1.284.169 2.922.169 4.974.169h2.135c2.052 0 3.69 0 4.975-.169 1.325-.174 2.42-.545 3.29-1.395.588-.576.96-1.262 1.192-2.066a.978.978 0 0 0-1.878-.54c-.157.54-.376.913-.683 1.214-.444.434-1.061.707-2.177.854-1.142.15-2.65.152-4.79.152h-1.992c-1.18 0-2.168 0-3.008-.026-.435-.014-.652-.02-.793-.166-.14-.145-.14-.368-.14-.813V5.205c0-.445 0-.668.14-.813.141-.146.358-.152.793-.166.84-.025 1.828-.026 3.008-.026h1.992c2.14 0 3.648.002 4.79.152 1.116.147 1.733.42 2.177.854.307.3.526.674.683 1.214a.978.978 0 0 0 1.878-.54c-.233-.804-.604-1.49-1.192-2.066-.87-.85-1.965-1.22-3.29-1.395-1.285-.169-2.923-.169-4.975-.169"
      />
    </svg>
  );
};
export default TabletConnectedWifi;
