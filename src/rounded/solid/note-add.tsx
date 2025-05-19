import React from "react";
const NoteAdd: React.FC<
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
        d="M5.875 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.43 2.25H9.32c-1.603 0-2.882 0-3.885.135-1.037.14-1.89.435-2.565 1.11S1.9 5.023 1.76 6.06c-.135 1.003-.135 2.282-.135 3.884v5.112c0 1.602 0 2.881.135 3.884.14 1.037.435 1.89 1.11 2.565s1.528.97 2.565 1.11c1.003.135 2.282.135 3.884.135h3.112c.768 0 1.462 0 2.087-.015.128-.003.192-.004.271-.066a.4.4 0 0 0 .07-.08c.052-.085.044-.173.027-.35a3 3 0 0 1-.011-.239v-.9c0-.283 0-.424-.088-.512s-.23-.088-.512-.088h-.9a2.5 2.5 0 0 1 0-5h.9c.283 0 .424 0 .512-.088s.088-.23.088-.512V14a2.5 2.5 0 0 1 5 0 .25.25 0 0 0 .25-.25V9.944c0-1.602 0-2.881-.135-3.884-.14-1.037-.435-1.89-1.11-2.565s-1.528-.97-2.565-1.11c-1.003-.135-2.282-.135-3.884-.135m-5.555 6a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.375 13a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NoteAdd;
