// ─────────────────────────────────────────────────────────────────────────────
// CAMPAIGN CONFIGURATION
// All candidate details, content, and links live here.
// Edit this file freely — you never need to touch the components.
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  candidate: {
    // ── Identity ─────────────────────────────────────────────────────────────
    name: "Salman Arefin",
    title: "Regional Councillor — Cambridge",

    // Shown under the name in the hero (keep to one punchy sentence)
    tagline:
      "Building a Cambridge that works for everyone who calls it home.",

    // ── About section ────────────────────────────────────────────────────────
    bio: `Salman Arefin has lived in Cambridge for over 20 years — long enough to watch the city grow, and to worry about whether it's growing in the right direction. A civil engineer turned community organizer, he has spent the last decade working on the problems Cambridge families actually face: congestion, housing costs, and a regional government that too often makes decisions without enough community input.`,

    whyRunning: `"Cambridge is at an inflection point. We have a once-in-a-generation opportunity to shape how our community grows — to get transit right, to protect our neighbourhoods, and to make sure the next generation can actually afford to live here. I'm running because Cambridge residents deserve a regional voice that's as committed to this city as they are."`,

    highlights: [
      "15+ years in municipal infrastructure planning and civil engineering",
      "Former Chair, Cambridge Community Benefits Network (2019–2023)",
      "Co-founder, East Cambridge Housing Action Group",
      "Led Cambridge residents' budget consultation process, 2022",
      "Parent of two children in Cambridge public schools",
    ],

    // ── Career experience timeline ────────────────────────────────────────────
    // Add / remove / reorder entries freely. period is free-form text.
    careerExperience: [
      {
        role: "Senior Civil Engineer",
        organization: "Region of Waterloo",
        period: "2018 – Present",
        description:
          "Lead infrastructure planning for regional road and transit corridors, including environmental assessment coordination and multi-stakeholder engagement across Cambridge, Kitchener, and Waterloo.",
      },
      {
        role: "Project Engineer — Municipal Infrastructure",
        organization: "City of Cambridge",
        period: "2012 – 2018",
        description:
          "Managed capital projects totalling $40M+ across water, wastewater, and transportation networks. Delivered the East Galt streetscape revitalization on time and under budget.",
      },
      {
        role: "Community Advocacy & Volunteer Leadership",
        organization: "Cambridge Community Benefits Network",
        period: "2016 – 2023",
        description:
          "Chaired a volunteer-led coalition securing community benefit agreements on three major development projects, resulting in local hiring commitments and affordable unit targets.",
      },
      {
        role: "B.Eng. Civil Engineering",
        organization: "University of Waterloo",
        period: "2007 – 2012",
        description:
          "Honours degree with a focus on transportation systems and environmental engineering. Recipient of the Conrad Grebel Community Impact Award.",
      },
    ],
  },

  election: {
    date: "October 26, 2026",
    voteYear: "2026",
    position: "Regional Councillor",
    municipality: "Cambridge, Ontario",
    region: "Region of Waterloo",
  },

  // ── Platform cards ─────────────────────────────────────────────────────────
  // icon: any name from https://lucide.dev/icons
  // 3–6 items recommended
  priorities: [
    {
      icon: "Bus",
      title: "Transit That Works",
      description:
        "Push for the ION LRT extension to Cambridge and real improvements to local bus service, so residents have genuine alternatives to driving.",
    },
    {
      icon: "Home",
      title: "Housing Affordability",
      description:
        "Champion missing-middle housing policies and stronger tenant protections to keep Cambridge accessible for families, seniors, and newcomers.",
    },
    {
      icon: "Leaf",
      title: "Climate & Green Spaces",
      description:
        "Protect Cambridge's tree canopy, expand active transportation networks, and hold the Region accountable to its own climate commitments.",
    },
    {
      icon: "DollarSign",
      title: "Responsible Development",
      description:
        "Ensure new development contributes fairly to infrastructure costs so existing taxpayers aren't saddled with the bill for rapid growth.",
    },
    {
      icon: "Users",
      title: "Community Safety",
      description:
        "Invest in proven social infrastructure — mental health resources, youth programming, and community hubs — as part of a complete safety strategy.",
    },
    {
      icon: "Building2",
      title: "Regional Accountability",
      description:
        "Bring transparency and genuine community input to Regional Council decisions that affect Cambridge residents every single day.",
    },
  ],

  // ── Pull-quote section ────────────────────────────────────────────────────
  vision: {
    quote:
      "Cambridge deserves a regional voice that fights as hard as its residents do — every single day.",
    attribution: "— Salman Arefin",
  },

  // ── Contact & social ──────────────────────────────────────────────────────
  contact: {
    email: "hello@salmanarefin.ca",
    social: {
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
      facebook: "https://facebook.com/",
    },
  },

  // ── Donation ─────────────────────────────────────────────────────────────
  donation: {
    // External URL to your campaign contribution page (e.g. DonorBox, Stripe, etc.)
    url: "https://example.com/donate",
    note: "Contribution limits apply under the Ontario Municipal Elections Act, 1996. Contributions are not tax-deductible.",

    // Ontario Municipal Elections Act — contribution rules displayed on the Donate page.
    // Update the limit amount if the Province revises it before election day.
    rules: [
      {
        heading: "Contribution limit: $1,200 per candidate",
        detail:
          "No individual may contribute more than $1,200 in total to a single candidate's campaign, including money, goods, and services.",
      },
      {
        heading: "Ontario residents only",
        detail:
          "Only individuals who are ordinarily resident in Ontario may make a contribution. Non-residents, including non-Canadian citizens living outside Ontario, are not eligible.",
      },
      {
        heading: "No corporate or union contributions",
        detail:
          "Corporations, trade unions, unincorporated associations, and organizations are prohibited from contributing to a municipal campaign.",
      },
      {
        heading: "Anonymous contributions capped at $25",
        detail:
          "Anonymous donations are permitted only up to $25. Any contribution over $25 requires the contributor's full name and address.",
      },
      {
        heading: "Contributions are not tax-deductible",
        detail:
          "Unlike federal or provincial political donations, municipal campaign contributions do not qualify for an income-tax credit.",
      },
      {
        heading: "Campaign financial disclosure",
        detail:
          "All contributions are reported to the City Clerk and become part of the public record. The campaign files audited financial statements after the election.",
      },
    ],
  },

  // ── Hero background video ────────────────────────────────────────────────
  // Drop your video in public/ (e.g. public/hero-bg.mp4) then set the path.
  // Leave empty to use the animated orb background instead.
  heroVideo: "",  // e.g. "/hero-bg.mp4"

  // ── Video section ─────────────────────────────────────────────────────────
  // Set ONE of youtubeUrl, vimeoUrl, or localVideo when your video is ready.
  // Leave all three empty to show the "coming soon" placeholder.
  videoSection: {
    label: "Campaign Message",
    title: "Why I'm Running",
    description:
      "Hear directly from Salman Arefin about the Cambridge he envisions, the problems he's committed to solving, and why the 2026 Regional Council election matters for every family in this city.",
    youtubeUrl: "",   // e.g. "https://youtu.be/YOUR_VIDEO_ID"
    vimeoUrl:   "",   // e.g. "https://vimeo.com/123456789"
    localVideo: "",   // e.g. "/campaign-video.mp4"
  },

  // ── Form webhook ─────────────────────────────────────────────────────────
  // Set VITE_FORM_WEBHOOK_URL in your .env file.
  // Compatible with Make, Zapier, n8n, or any endpoint that accepts JSON POST.
  webhookUrl: import.meta.env.VITE_FORM_WEBHOOK_URL ?? "",
}
