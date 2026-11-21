export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt?: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "epoxy-flooring-white-rock-garage",
    title: "Is Epoxy Flooring Right for Your White Rock Garage?",
    description: "Thinking about epoxy flooring in White Rock, BC? Learn the benefits, drawbacks, costs, and prep needs before you coat your garage floor.",
    intro: "Your garage takes a beating. Between wet winters, muddy boots, dripping car fluids and the occasional dropped tool, bare concrete does not hold up well. That is why more homeowners are asking about epoxy flooring in White Rock, BC as a way to protect and upgrade their space. But is it the right choice for you? This guide covers how epoxy works, what it can and cannot do, and how to decide if it suits your garage.",
    sections: [
      {
        heading: "What Is a Garage Floor Epoxy Coating and How Does It Work?",
        paragraphs: [
          "Epoxy is a two-part system made of a resin and a hardener. When mixed, they trigger a chemical reaction that cures into a hard, plastic-like surface bonded directly to your concrete. Unlike paint, which sits on top and peels, a properly installed garage floor epoxy coating becomes part of the floor itself.",
          "Most installations start with grinding the slab, then add a primer, one or more coats of colored epoxy, and a protective topcoat. Decorative flakes can be added for texture and a more finished look. The result is a seamless, glossy surface that is much easier to maintain than raw concrete. Professional epoxy floor coatings are also built thicker and tougher than the thin kits sold at hardware stores.",
        ],
      },
      {
        heading: "Why Epoxy Flooring in White Rock, BC Makes Sense for Coastal Weather",
        paragraphs: [
          "The Semiahmoo Peninsula is beautiful, but it is also damp for much of the year. Rain, humidity and cool temperatures mean concrete floors are constantly exposed to moisture. Untreated concrete is porous, so it absorbs water, oil and road salt from vehicles. Over time that leads to stains, dusting and even surface cracking.",
          "Epoxy creates a sealed barrier that keeps liquids from soaking in. For homeowners near the water, that protection matters. A sealed floor is also easier to wipe down after a rainy commute, which keeps your garage cleaner and more pleasant to use.",
        ],
      },
      {
        heading: "Key Benefits of Epoxy Garage Floors",
        paragraphs: [
          "There are good reasons this option has become so popular.",
          "Durability. Epoxy resists abrasion, tire marks and impact better than most standard finishes. With a hot-tire-rated topcoat, a well-installed floor can last 10 to 20 years.",
          "Chemical resistance. Oil, gasoline, antifreeze and cleaning products wipe off a sealed surface instead of leaving permanent stains.",
          "Easy cleaning. A broom and a damp mop are usually all you need.",
          "Improved appearance. Options range from speckled flake finishes, which hide dirt and add grip, to swirled, high-gloss metallic epoxy for a statement garage.",
          "Brighter space. The reflective finish bounces light around the room, which helps if your garage has limited windows or doubles as a workshop.",
          "Added value. A clean, finished garage is an appealing feature if you ever decide to sell.",
        ],
      },
      {
        heading: "Are There Any Downsides to Consider?",
        paragraphs: [
          "No flooring is perfect, and knowing the trade-offs will save you frustration later.",
          "First, preparation is critical. Epoxy needs a clean, profiled surface to bond. If your concrete has deep cracks, oil contamination or moisture problems, those must be fixed first. Skipping this step is the most common reason coatings fail.",
          "Second, glossy epoxy can be slippery when wet. This is easily solved by adding anti-slip aggregate to the topcoat, which is especially worthwhile in a rainy climate.",
          "Third, some epoxy can yellow with prolonged direct sunlight. If your garage door is often open to strong light, ask about a UV-stable topcoat.",
          "Finally, curing takes time. Most garages are finished in one to two days, with light foot traffic fine after about 24 hours. Vehicles can usually return after roughly 72 hours.",
        ],
      },
      {
        heading: "How Much Does Epoxy Flooring in White Rock, BC Cost?",
        paragraphs: [
          "There is no single price that fits every home. The main variables are the size of your garage, the condition of the concrete, the type of system (solid, flake or metallic) and any extras like a protective topcoat.",
          "A basic single-layer coating costs less than a multi-layer system, but it also offers less protection. Floors that need crack repair or heavy grinding will add to the labour. The best approach is to request a free on-site estimate so a professional can inspect your slab and quote accurately. When comparing quotes, look at what each includes, such as prep work, number of coats and warranty, instead of focusing only on the lowest price.",
        ],
      },
      {
        heading: "Is Your Garage Ready for Concrete Floor Coatings?",
        paragraphs: [
          "Before committing, run through a quick checklist:",
          "Is your concrete reasonably solid, without major crumbling or structural cracks?",
          "Is the slab free from persistent moisture or water seepage?",
          "Do you want a floor that is easy to clean and resistant to stains?",
          "Are you prepared to clear the garage for a day or two during installation?",
          "If you answered yes to most of these, concrete floor coatings like epoxy are likely a strong fit. If moisture is a concern, a moisture test and the right primer can often solve it, but this is where professional advice pays off. The same systems also work well in basements, workshops and other residential epoxy flooring projects.",
        ],
      },
      {
        heading: "Final Thoughts",
        paragraphs: [
          "So, is epoxy the right call for your home? For most homeowners dealing with wet weather, vehicle traffic and the desire for a cleaner space, the answer is yes. Epoxy flooring in White Rock, BC offers a durable, attractive and low-maintenance solution as long as the surface is prepared correctly and the right system is chosen. If you want expert guidance, the team at PACIFIC FLOORS AND COATINGS can assess your garage, explain your options and help you choose a finish that fits your needs and budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does epoxy flooring last in a garage?",
        answer: "With proper grinding, quality materials and a hot-tire-rated topcoat, epoxy garage floors commonly last 10 to 20 years. Regular sweeping and occasional mopping help preserve the finish.",
      },
      {
        question: "Can epoxy flooring in White Rock, BC handle wet and rainy conditions?",
        answer: "Yes. Once cured, epoxy forms a waterproof barrier that stops moisture from soaking into the concrete. An anti-slip additive is recommended so the surface stays safe underfoot when wet.",
      },
    ],
  },
];

export const BLOG_PAGE_SIZE = 6;
