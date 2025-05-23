import React from "react";
const MessageSecure_01: React.FC<
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
        d="M9.78 2.323c1.1-.073 2.238-.091 3.358-.054A2 2 0 0 0 13 3v2.5c0 2.527 1.301 4.182 2.514 5.135a7.9 7.9 0 0 0 2.132 1.186c.143.051.502.178.854.178s.71-.127.854-.178a7.91 7.91 0 0 0 2.132-1.186 7 7 0 0 0 1.046-1.014q.133.636.176 1.301c.056.863.056 1.755 0 2.617-.298 4.61-3.921 8.296-8.488 8.6a34 34 0 0 1-4.44 0 5.6 5.6 0 0 1-1.722-.394c-.238-.098-.4-.165-.518-.208-.08.056-.189.135-.346.251-.793.585-1.793.995-3.213.96l-.046-.001c-.273-.007-.565-.014-.803-.06-.287-.055-.642-.194-.864-.572-.242-.412-.145-.83-.051-1.091.088-.248.242-.539.398-.835l.022-.041c.466-.884.596-1.606.347-2.087-.833-1.257-1.581-2.805-1.692-4.522a21 21 0 0 1 0-2.617c.298-4.61 3.921-8.296 8.488-8.6M8.502 15.755a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.5 1.25c.13.008.302.05.415.125.15.082.582.316.863.429A6 6 0 0 0 22 2.25a.75.75 0 0 1 .75.75v2.5c0 2.04-1.035 3.365-2.037 4.152-.496.39-.99.654-1.357.82-.193.088-.647.278-.856.277-.21.001-.663-.189-.856-.277a6.7 6.7 0 0 1-1.357-.82C15.284 8.865 14.25 7.541 14.25 5.5V3a.75.75 0 0 1 .75-.75 6 6 0 0 0 2.221-.446c.281-.113.715-.347.865-.43a.9.9 0 0 1 .414-.124"
      />
    </svg>
  );
};
export default MessageSecure_01;
