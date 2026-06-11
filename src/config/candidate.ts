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

    // Candidate headshot — drop file in public/ (e.g. public/candidate.jpg) then set path.
    // Leave empty to show initials placeholder.
    photo: "",  // e.g. "/candidate.jpg"

    // Shown under the name in the hero (keep to one punchy sentence)
    tagline: "Cambridge Deserves Its Fair Share.",

    // ── About section ────────────────────────────────────────────────────────
    // Separate paragraphs with \n\n — the About component renders each as its own <p>.
    bio: `Community has always been at the heart of everything I do. Whether in business, volunteer work, or community initiatives, I have always believed that real progress happens when people come together around a shared goal.

With a background in business development, branding, and entrepreneurship, I have spent years helping businesses, organizations, and community leaders grow, collaborate, and achieve meaningful results. These experiences have taught me the value of strategic thinking, strong relationships, and leadership that brings people together.

I worked alongside residents, faith groups, volunteers, and community organizations to support families, coordinate resources, and strengthen community networks. Those experiences reinforced my belief that the strongest communities are built when people come together with a shared purpose.

I am committed to being a strong voice for our community, building bridges across diverse groups, and ensuring that every resident feels heard, respected, and represented. Together, we can create new opportunities, address local challenges, and build a stronger future for everyone.`,

    whyRunning: `"I believe leadership begins with listening, understanding people's concerns, and working tirelessly to find practical solutions. That is the approach I have followed throughout my career and community involvement, and it is the same approach I will bring to public service."`,

    highlights: [
      "Background in business development, branding & entrepreneurship",
      "Years of experience helping businesses and organizations grow",
      "Community organizer working with residents, faith groups & volunteers",
      "Track record coordinating resources and strengthening community networks",
      "Committed to strategic leadership and practical, people-first solutions",
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
  priorities: [
    {
      icon: "Megaphone",
      title: "Cambridge Needs a Stronger Voice",
      description:
        "Cambridge should never feel like an afterthought at the Region. I will fight for Cambridge to be heard where decisions on regional services are made.",
    },
    {
      icon: "Scale",
      title: "Fair Investment for Cambridge",
      description:
        "Families here should see real value in the regional tax dollars they pay. I will push for Cambridge to get a fair share of regional resources, projects, and attention.",
    },
    {
      icon: "Bus",
      title: "Transit That Works for Real Life",
      description:
        "Getting to work, school, appointments, and home should not be a daily struggle. I will advocate for better regional transit connections that actually serve Cambridge residents.",
    },
    {
      icon: "Home",
      title: "Homes People Can Actually Afford",
      description:
        "Too many people are being squeezed by rising housing costs. I will support more affordable and supportive housing through the Region's role in planning and housing delivery.",
    },
    {
      icon: "Shield",
      title: "Safer, More Comfortable Streets",
      description:
        "People want to feel safe walking, waiting, and moving around their community. I will work on the regional issues that affect safety, including roads, transit stops, and supports for vulnerable residents.",
    },
    {
      icon: "GraduationCap",
      title: "Young People Belong Here",
      description:
        "Young adults deserve to feel that Cambridge has a future for them. I will make sure youth voices are part of the conversation on transit, housing, jobs, and community planning.",
    },
    {
      icon: "Heart",
      title: "Seniors Deserve Dignity and Ease",
      description:
        "Seniors should be able to stay active, independent, and connected to the community. I will focus on age-friendly regional services, accessible transit, and practical supports that matter day to day.",
    },
    {
      icon: "TreePine",
      title: "Growth That Protects Cambridge",
      description:
        "Cambridge needs growth, but it has to be handled responsibly. I will support planning that respects neighbourhoods, infrastructure limits, and long-term community needs.",
    },
    {
      icon: "Brain",
      title: "Real Support for Mental Health and Crisis Response",
      description:
        "Too many families are dealing with situations that are bigger than a single household can solve. I will back stronger regional support systems for mental health, addictions, and crisis care.",
    },
    {
      icon: "MessageSquare",
      title: "Clear Answers, Not Confusion",
      description:
        "People deserve to know what the Region does and how decisions are made. I will keep residents informed with plain-language updates, regular outreach, and open communication.",
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

  // ── Hero background photo ────────────────────────────────────────────────
  // Drop a Cambridge city photo in public/ (e.g. public/cambridge-bg.jpg) then set the path.
  // Leave empty to use the animated gradient background instead.
  heroBackground: "",  // e.g. "/cambridge-bg.jpg"

  // ── Hero key points ───────────────────────────────────────────────────────
  // Shown as a checklist in the hero section — keep to 6 or 7 max.
  keyPoints: [
    "A stronger voice for Cambridge at the Regional table",
    "Fair share of regional investment and resources",
    "Better transit connections that serve real life",
    "More homes people can actually afford",
    "Safer, age-friendly communities for all residents",
    "Responsible growth that respects our neighbourhoods",
  ],

  // ── Lawn-sign CTA ────────────────────────────────────────────────────────
  // Use "#get-involved" to scroll to the contact form, or an external URL.
  lawnSignUrl: "#get-involved",

  // ── Campaign progress stats ───────────────────────────────────────────────
  // Shown in the animated counter section below the hero.
  // Update these numbers as the campaign grows.
  campaignStats: [
    { value: 1200, suffix: "+", label: "Doors Knocked"             },
    { value: 850,  suffix: "+", label: "Residents Met"             },
    { value: 14,   suffix: "",  label: "Neighbourhoods Visited"    },
  ],

  // ── Hero background video ────────────────────────────────────────────────
  // Drop your video in public/ (e.g. public/hero-bg.mp4) then set the path.
  // Leave empty — heroBackground (photo) takes priority; video overrides both.
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
