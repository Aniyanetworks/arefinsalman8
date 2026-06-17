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

    tagline: "Cambridge Deserves Its Fair Share.",

    // ── Bio (My Story page) ───────────────────────────────────────────────────
    // Separate paragraphs with \n\n
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

    // ── Career experience timeline (My Story page) ────────────────────────────
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

  // ── Rooted in Community section ───────────────────────────────────────────
  // Update this text with content from WhatsApp as discussed.
  rootedInCommunity: {
    headline: "Rooted in Community",
    description:
      "Cambridge is not just where I work — it is where I belong. For years I have walked these streets, built relationships across our neighbourhoods, and listened to the concerns that matter most to families here. That deep connection is what drives me to run, and it is what will guide every decision I make at the Region.",
    pillars: [
      {
        icon: "Users",
        title: "Community Organizer",
        description:
          "Bringing residents, faith groups, and community organizations together to solve problems and create opportunity.",
      },
      {
        icon: "Briefcase",
        title: "Business Builder",
        description:
          "Supporting local entrepreneurs and small businesses with the resources, networks, and visibility they need to thrive.",
      },
      {
        icon: "HeartHandshake",
        title: "Faith & Family",
        description:
          "Building bridges across Cambridge's diverse faith communities and advocating for family-centred policies.",
      },
      {
        icon: "Star",
        title: "Volunteer Leader",
        description:
          "Years of hands-on volunteer service — coordinating resources, supporting families, and strengthening networks.",
      },
    ],
  },

  // ── Action Plan (separate page) ───────────────────────────────────────────
  // icon: any name from https://lucide.dev/icons
  priorities: [
    {
      icon: "Megaphone",
      category: "Advocacy",
      title: "Cambridge Needs a Stronger Voice",
      description:
        "Cambridge should never feel like an afterthought at the Region. I will fight for Cambridge to be heard where decisions on regional services are made.",
    },
    {
      icon: "Scale",
      category: "Fiscal Fairness",
      title: "Fair Investment for Cambridge",
      description:
        "Families here should see real value in the regional tax dollars they pay. I will push for Cambridge to get a fair share of regional resources, projects, and attention.",
    },
    {
      icon: "Bus",
      category: "Transit",
      title: "Transit That Works for Real Life",
      description:
        "Getting to work, school, appointments, and home should not be a daily struggle. I will advocate for better regional transit connections that actually serve Cambridge residents.",
    },
    {
      icon: "Home",
      category: "Housing",
      title: "Homes People Can Actually Afford",
      description:
        "Too many people are being squeezed by rising housing costs. I will support more affordable and supportive housing through the Region's role in planning and housing delivery.",
    },
    {
      icon: "Shield",
      category: "Safety",
      title: "Safer, More Comfortable Streets",
      description:
        "People want to feel safe walking, waiting, and moving around their community. I will work on the regional issues that affect safety, including roads, transit stops, and supports for vulnerable residents.",
    },
    {
      icon: "GraduationCap",
      category: "Youth",
      title: "Young People Belong Here",
      description:
        "Young adults deserve to feel that Cambridge has a future for them. I will make sure youth voices are part of the conversation on transit, housing, jobs, and community planning.",
    },
    {
      icon: "Heart",
      category: "Seniors",
      title: "Seniors Deserve Dignity and Ease",
      description:
        "Seniors should be able to stay active, independent, and connected to the community. I will focus on age-friendly regional services, accessible transit, and practical supports that matter day to day.",
    },
    {
      icon: "TreePine",
      category: "Growth",
      title: "Growth That Protects Cambridge",
      description:
        "Cambridge needs growth, but it has to be handled responsibly. I will support planning that respects neighbourhoods, infrastructure limits, and long-term community needs.",
    },
    {
      icon: "Brain",
      category: "Health",
      title: "Real Support for Mental Health",
      description:
        "Too many families are dealing with situations that are bigger than a single household can solve. I will back stronger regional support systems for mental health, addictions, and crisis care.",
    },
    {
      icon: "MessageSquare",
      category: "Accountability",
      title: "Clear Answers, Not Confusion",
      description:
        "People deserve to know what the Region does and how decisions are made. I will keep residents informed with plain-language updates, regular outreach, and open communication.",
    },
  ],

  // ── The Cambridge Listening Tour ─────────────────────────────────────────
  // Update these numbers as the campaign grows. Start at 0 — they animate up.
  listeningTour: {
    description:
      "Across every corner of Cambridge, we are having real conversations. Here is where the campaign stands — and every number represents a neighbour heard.",
    items: [
      { label: "Handshakes",         value: 0 },
      { label: "Conversations",      value: 0 },
      { label: "Businesses Visited", value: 0 },
      { label: "Doors Knocked",      value: 0 },
    ],
  },

  // ── Contact & social ──────────────────────────────────────────────────────
  contact: {
    email: "hello@salmanarefin.ca",
    social: {
      twitter:   "https://twitter.com/",
      instagram: "https://instagram.com/",
      facebook:  "https://facebook.com/",
    },
  },

  // ── Donation ─────────────────────────────────────────────────────────────
  donation: {
    url: "https://example.com/donate",
    note: "Contribution limits apply under the Ontario Municipal Elections Act, 1996. Contributions are not tax-deductible.",
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

  // ── Hero background photo ─────────────────────────────────────────────────
  // Drop a Cambridge city photo in public/ then set the path.
  heroBackground: "",  // e.g. "/cambridge-bg.jpg"

  // ── Hero background video ─────────────────────────────────────────────────
  // Video overrides heroBackground when both are set.
  heroVideo: "",  // e.g. "/hero-bg.mp4"

  // ── Video section ─────────────────────────────────────────────────────────
  videoSection: {
    label: "Campaign Message",
    title: "Why I'm Running",
    description:
      "Hear directly from Salman Arefin about the Cambridge he envisions, the problems he's committed to solving, and why the 2026 Regional Council election matters for every family in this city.",
    youtubeUrl: "",
    vimeoUrl:   "",
    localVideo: "",
  },

  // ── Form webhook ─────────────────────────────────────────────────────────
  webhookUrl: import.meta.env.VITE_FORM_WEBHOOK_URL ?? "",
}
