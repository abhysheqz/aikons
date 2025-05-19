import React from "react";
const MessageBlocked: React.FC<
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
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.1 1.823a34 34 0 0 1 4.44 0c4.567.303 8.19 3.99 8.489 8.6a21 21 0 0 1 0 2.616 9.3 9.3 0 0 1-1.103 3.835.75.75 0 0 1-1.19.172L7.29 3.6a.75.75 0 0 1 .269-1.234 9 9 0 0 1 2.541-.543M4.292 4.47a.75.75 0 0 1 1.054-.008l14.404 14a.75.75 0 0 1-.045 1.116 9 9 0 0 1-5.164 2.06 34 34 0 0 1-4.441 0 5.6 5.6 0 0 1-1.721-.393 16 16 0 0 0-.518-.208c-.082.056-.19.135-.347.251-.79.583-1.788.993-3.203.96-.387 0-.728 0-.98-.063a1.12 1.12 0 0 1-.743-.57c-.241-.412-.145-.83-.05-1.092.088-.247.241-.538.398-.834l.021-.041c.467-.884.596-1.606.347-2.088-.832-1.256-1.581-2.804-1.692-4.52a21 21 0 0 1 0-2.618 9.26 9.26 0 0 1 2.68-5.952"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageBlocked;
