import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type ContactRequestBody = {
  fullName?: string;
  name?: string;
  email?: string;
  companyName?: string | null;
  company?: string | null;
  country?: string | null;
  interest?: string | null;
  businessChallenge?: string;
  message?: string;
  locale?: string;
};

const allowedInterests = new Set([
  "audit",
  "starter",
  "growth",
  "support",
  "workflow",
  "bookkeeping",
  "customer-support",
  "custom-ai",
  "integration",
  "consulting",
  "tali",
  "personalab",
  "partnership",
  "general",
]);

function getBrowser(userAgent: string) {
  if (/edg/i.test(userAgent)) {
    return "Microsoft Edge";
  }

  if (/opr|opera/i.test(userAgent)) {
    return "Opera";
  }

  if (/chrome|crios/i.test(userAgent)) {
    return "Google Chrome";
  }

  if (/firefox|fxios/i.test(userAgent)) {
    return "Mozilla Firefox";
  }

  if (/safari/i.test(userAgent)) {
    return "Safari";
  }

  return "Unknown";
}

function getDeviceType(userAgent: string) {
  if (/tablet|ipad/i.test(userAgent)) {
    return "Tablet";
  }

  if (/mobile|iphone|ipod|android/i.test(userAgent)) {
    return "Mobile";
  }

  return "Desktop";
}

function getOperatingSystem(userAgent: string) {
  if (/windows nt/i.test(userAgent)) {
    return "Windows";
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return "iOS";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/mac os x|macintosh/i.test(userAgent)) {
    return "macOS";
  }

  if (/linux/i.test(userAgent)) {
    return "Linux";
  }

  return "Unknown";
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are missing.",
    );
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body =
      (await request.json()) as ContactRequestBody;

    const fullName = (
      body.fullName ||
      body.name ||
      ""
    ).trim();

    const email = (body.email || "")
      .trim()
      .toLowerCase();

    const companyName = (
      body.companyName ||
      body.company ||
      ""
    ).trim();

    const country = (body.country || "").trim();

    const businessChallenge = (
      body.businessChallenge ||
      body.message ||
      ""
    ).trim();

    const locale = (body.locale || "en")
      .trim()
      .toLowerCase();

    const interest =
      body.interest &&
      allowedInterests.has(body.interest)
        ? body.interest
        : "general";

    if (!fullName || !email || !businessChallenge) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Full name, email and business challenge are required.",
        },
        {
          status: 400,
        },
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (fullName.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "The full name is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (email.length > 320) {
      return NextResponse.json(
        {
          success: false,
          message: "The email address is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (companyName.length > 200) {
      return NextResponse.json(
        {
          success: false,
          message: "The company name is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (country.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "The country name is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      businessChallenge.length < 10 ||
      businessChallenge.length > 5000
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "The business challenge must contain between 10 and 5000 characters.",
        },
        {
          status: 400,
        },
      );
    }

    const userAgent =
      request.headers.get("user-agent") || "";

    const acceptedLanguage =
      request.headers.get("accept-language");

    const referralUrl =
      request.headers.get("referer");

    const countryCode =
      request.headers.get(
        "x-vercel-ip-country",
      ) ||
      request.headers.get("cf-ipcountry") ||
      null;

    const metadata = {
      locale,
      accepted_language:
        acceptedLanguage || null,
      country_code: countryCode,
      browser: getBrowser(userAgent),
      device_type: getDeviceType(userAgent),
      operating_system:
        getOperatingSystem(userAgent),
      referral_url: referralUrl || null,
      source: "riseinai_website_contact_form",
    };

    const supabase = getSupabaseClient();

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        full_name: fullName,
        email,
        company_name: companyName || null,
        country: country || null,
        interest,
        business_challenge: businessChallenge,
        locale,
        source: "risein ai_website",
        status: "new",
        metadata,
        submitted_at: new Date().toISOString(),
      });

    if (error) {
      console.error(
        "Supabase contact submission error:",
        error,
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Your request could not be saved. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your request has been received.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(
      "Contact API route error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}