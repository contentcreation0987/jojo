/* JOJO website kit content.
   Contact details, socials, founder name and office address are REAL, read from
   https://www.jojo-international.com (Aug 2026).
   Featured cars are REAL live BeForward listings (Toyota Prius, stocklist make=1/model=225,
   read Aug 2026) — ref numbers, FOB prices, mileage, engine, transmission, stock location
   and photography all come from those listings.
   Stats and testimonials are still placeholders — marked below. */
window.JOJO_DATA = {
  whatsapp: "923168301723",
  phoneDisplay: "+92 316 830 1723",
  email: "info@jojo-international.com",
  hours: "Mon – Sat · 24 hour service",
  address: "Building A-314, Ground Floor, Block J, North Nazimabad, Karachi",
  founder: "Shahzaib Saleem",

  social: [
    { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/jojointl" },
    { icon: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/jojo-international/" },
    /* Instagram and X/Twitter icons on the live site link to the platform root, not to a
       JOJO profile — i.e. they are broken. Omitted until real handles exist. */
  ],

  links: [
    { label: "Home", href: "#home" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Featured cars", href: "#featured" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  /* PLACEHOLDER — real figures needed. "Since 2016" is confirmed from the live site. */
  stats: [
    { value: "2016", label: "Trading since", animate: false },
    { value: 500, suffix: "+", label: "Cars delivered" },
    { value: 12, label: "Countries served" },
    { value: "24h", label: "Quote turnaround", animate: false },
  ],

  steps: [
    { index: "001", icon: "car", title: "Choose your car", body: "Browse BeForward's 540,000-car stock, or just tell us the model, year and budget you have in mind." },
    { index: "002", icon: "message-circle", title: "Message us", body: "Send the ref number on WhatsApp. We confirm availability and quote you a landed price for your port." },
    { index: "003", icon: "file-text", title: "Payment & paperwork", body: "You pay BeForward Japan directly. We prepare inspection, export and shipping documents." },
    { index: "004", icon: "ship", title: "Shipped & delivered", body: "We book the sailing, send you the bill of lading, and stay on the thread until it's in your hands." },
  ],

  /* REAL BeForward listings — refreshed Aug 2026. Re-pull weekly. */
  cars: [
    {
      refNo: "CE450479", model: "Toyota Prius 2.0Z", year: "2023",
      image: "https://image-cdn.beforward.jp/medium/202608/16333715/CE450479_20e2c3d2.jpg?w=400",
      listingHref: "https://www.beforward.jp/toyota/prius/ce450479/id/16333715/",
      priceRange: "$18,560", tags: ["Hybrid", "AT", "2WD"],
      specs: [
        { key: "Mileage", value: "38,000 km" },
        { key: "Engine", value: "2,000cc" },
        { key: "Stock", value: "Nagoya, Japan" },
      ],
    },
    {
      refNo: "CE450317", model: "Toyota Prius 1.8U", year: "2023",
      image: "https://image-cdn.beforward.jp/medium/202608/16333553/CE450317_20e2a6af.jpg?w=400",
      listingHref: "https://www.beforward.jp/toyota/prius/ce450317/id/16333553/",
      priceRange: "$16,380", tags: ["Hybrid", "AT", "2WD"],
      specs: [
        { key: "Mileage", value: "9,000 km" },
        { key: "Engine", value: "1,800cc" },
        { key: "Stock", value: "Yokohama, Japan" },
      ],
    },
    {
      refNo: "CE327822", model: "Toyota Prius 1.8A", year: "2016",
      image: "https://image-cdn.beforward.jp/medium/202608/16209968/CE327822_20e28b4f.jpg?w=400",
      listingHref: "https://www.beforward.jp/toyota/prius/ce327822/id/16209968/",
      priceRange: "$11,620", tags: ["Hybrid", "AT", "2WD"],
      specs: [
        { key: "Mileage", value: "80,000 km" },
        { key: "Engine", value: "1,800cc" },
        { key: "Stock", value: "Nagoya, Japan" },
      ],
    },
    {
      refNo: "CE450072", model: "Toyota Prius 1.8A", year: "2026",
      image: "https://image-cdn.beforward.jp/medium/202608/16333305/CE450072_20e2606d.jpg?w=400",
      listingHref: "https://www.beforward.jp/toyota/prius/ce450072/id/16333305/",
      priceRange: "$7,770", tags: ["Hybrid", "CVT", "2WD"],
      specs: [
        { key: "Mileage", value: "13,832 km" },
        { key: "Engine", value: "1,790cc" },
        { key: "Stock", value: "Nagoya, Japan" },
      ],
    },
    {
      refNo: "CE450337", model: "Toyota Prius", year: "2012",
      image: "https://image-cdn.beforward.jp/medium/202608/16333573/CE450337_20e2aa76.JPG?w=400",
      listingHref: "https://www.beforward.jp/toyota/prius/ce450337/id/16333573/",
      priceRange: "$5,140", tags: ["Hybrid", "AT"],
      specs: [
        { key: "Mileage", value: "47,766 km" },
        { key: "Engine", value: "1,797cc" },
        { key: "Stock", value: "Yokohama, Japan" },
      ],
    },
    {
      refNo: "CE450018", model: "Toyota Prius", year: "2009",
      image: "https://image-cdn.beforward.jp/medium/202608/16333251/CE450018_20e24b6e.jpg?w=400",
      listingHref: "https://www.beforward.jp/toyota/prius/ce450018/id/16333251/",
      priceRange: "$3,590", tags: ["Hybrid", "CVT", "2WD"],
      specs: [
        { key: "Mileage", value: "89,471 km" },
        { key: "Engine", value: "1,790cc" },
        { key: "Stock", value: "Yokohama, Japan" },
      ],
    },
  ],

  /* PLACEHOLDER — real client quotes needed before launch. */
  testimonials: [
    { quote: "The Prado landed in Durban exactly when they said it would. Photos at every stage is what made me comfortable paying up front.", name: "T. Mokoena", country: "South Africa", car: "2021 Land Cruiser Prado" },
    { quote: "I asked about a Corolla on a Tuesday and had the invoice and inspection report by Thursday. No chasing, no forms.", name: "B. Chirwa", country: "Zambia", car: "2020 Corolla" },
    { quote: "They told me up front that the payment goes to BeForward, not to them. That one sentence is why I trusted the rest.", name: "S. Ndlovu", country: "Zimbabwe", car: "2019 Prius" },
  ],

  faqs: [
    { question: "Who do I actually pay?", answer: "BeForward Japan, directly. JOJO never holds your money — we source the car, handle the paperwork and arrange shipping around your purchase." },
    { question: "What does the price on a card mean?", answer: "It's BeForward's FOB price — the car, free on board in Japan. Your landed cost adds ocean freight, insurance, certification and your own import duty, and depends on your port. We quote that per conversation." },
    { question: "How long does delivery take?", answer: "Typically 6–10 weeks from payment to your port, depending on sailing schedules and clearing at your end. We tell you the vessel and ETA as soon as it's booked." },
    { question: "Which countries do you ship to?", answer: "Most of southern and eastern Africa, plus the Caribbean. Tell us your port on WhatsApp and we'll confirm." },
    { question: "Can I see the car before I pay?", answer: "You get the BeForward listing photos plus the third-party inspection report. If you want specific angles or a video, we ask the yard for them." },
    { question: "Do you sell cars you don't have?", answer: "We don't hold stock at all — that's the point. BeForward Japan holds over 540,000 vehicles, and we're their authorized agent in Pakistan. So there's no live catalogue here: you tell us what you want and we source it." },
  ],
};
