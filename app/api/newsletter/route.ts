import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

type NewsletterBody = {
  email?: unknown;
};

type SupabaseErrorDetails = {
  code?: string;
  message?: string;
  details?: string;
  hint?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as NewsletterBody;

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email,
        source: "risein ai_homepage",
      });

    if (error) {
      const databaseError =
        error as SupabaseErrorDetails;

      console.error("Newsletter database error", {
        code: databaseError.code,
        message: databaseError.message,
        details: databaseError.details,
        hint: databaseError.hint,
      });

      if (databaseError.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message:
              "This email address is already subscribed.",
          },
          {
            status: 409,
          }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message:
            databaseError.message ||
            "The subscription could not be saved.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "You are subscribed. Welcome to the Risein newsletter.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Newsletter API error",
      error instanceof Error
        ? error.message
        : String(error)
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "The server could not process your subscription.",
      },
      {
        status: 500,
      }
    );
  }
}