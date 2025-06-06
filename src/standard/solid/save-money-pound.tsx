import React from "react";
const SaveMoneyPound: React.FC<
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
        d="M14 1.318a7.75 7.75 0 0 0-7.16 10.72q.36.121.695.306l1.543.849H9.5c1.291 0 2.44.485 3.283 1.242l2.716-.906a4.25 4.25 0 0 1 4.152.842A7.75 7.75 0 0 0 14 1.318m-1.75 4.75a2.25 2.25 0 0 1 4.5 0v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-1.5 0v1.25h.75a.75.75 0 0 1 0 1.5h-.75v.25c0 .262-.045.515-.128.75H16a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5.75.75 0 0 0 .75-.75v-.25H12a.75.75 0 0 1 0-1.5h.25zm-10 8a.75.75 0 0 1 .75-.75h2.486c.464 0 .92.117 1.326.34l1.88 1.035H9.5a3.5 3.5 0 0 1 .649.06 3.5 3.5 0 0 1 .88.291c.487.24.894.586 1.19.989.109.158.186.313.235.456l-3.288 1.117a.5.5 0 0 1-.32 0l-2.68-.893a.5.5 0 1 0-.316.949l2.68.894a1.5 1.5 0 0 0 .957-.003l3.69-1.253a.5.5 0 0 0 .338-.474c0-.326-.09-.657-.245-.973l2.703-.9a2.75 2.75 0 0 1 3.423 1.587 1.627 1.627 0 0 1-.783 2.06l-7.585 3.792a2.75 2.75 0 0 1-1.979.186L2.796 20.81a.75.75 0 0 1-.546-.722z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SaveMoneyPound;
