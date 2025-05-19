import React from "react";
const SpeedTrain_01: React.FC<
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
        d="M12.102 2.689c-1.333-.44-2.752-.44-5.226-.44H2a.75.75 0 0 0-.75.75v3.85c0 .19 0 .284.059.342s.152.059.341.059h2.269c.245 0 .402 0 .555.01a4.75 4.75 0 0 1 3.343 1.697c.169.202.327.416.47.631.366.549.463 1.195.463 1.841 0 .196-.004.392-.074.578a1.15 1.15 0 0 1-.669.668c-.19.072-.395.075-.591.075H1.65c-.189 0-.283 0-.341.059s-.059.152-.059.34V15c0 .415.336.75.75.75h18.044a2.75 2.75 0 0 0 2.706-2.705v-.191a5.75 5.75 0 0 0-2.373-4.599l-3.81-2.814c-1.99-1.47-3.13-2.312-4.465-2.751m.923 2.458a.61.61 0 0 0-.666-.083.66.66 0 0 0-.359.592V6.97c0 2.818 2.323 5.03 5.1 5.03h2.771a.63.63 0 0 0 .593-.436.67.67 0 0 0-.196-.729z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 10.85c0 .189 0 .283.059.341s.152.059.341.059h5.39c.1 0 .15 0 .18-.034.03-.035.023-.08.01-.172-.06-.441-.267-.77-.565-1.126a3.25 3.25 0 0 0-2.287-1.161 8 8 0 0 0-.485-.007H1.65c-.189 0-.283 0-.341.058-.059.06-.059.153-.059.342z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 19a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpeedTrain_01;
