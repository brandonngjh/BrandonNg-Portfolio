"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Starting email send process");
  
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  console.log(`Sender Email: ${senderEmail}, Message length: ${message?.toString().length}`);

  if (!validateString(senderEmail, 500)) {
    console.log("Invalid sender email");
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    console.log("Invalid message");
    return {
      error: "Invalid message",
    };
  }

  console.log("Validation passed, attempting to send email");

  let data;
  try {
    console.log("Calling resend.emails.send");
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "brandonng2210@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    console.log("Email sent successfully, response:", data);
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  console.log("Email process completed");
  return {
    data,
  };
};