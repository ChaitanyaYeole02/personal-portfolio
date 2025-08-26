import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="gameboy-button group flex items-center gap-2"
      disabled={pending}
    >
      {pending ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
      ) : (
        <>
          <span>Send Message</span>
          <FaPaperPlane className="text-xs" />
        </>
      )}
    </button>
  );
}
