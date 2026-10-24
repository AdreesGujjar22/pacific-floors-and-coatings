// SEO copy for service pages, area pages and neighbourhood pages.
// Placeholders: {c} = city, {n1}/{n2} = first two neighbourhoods of that city.

export type Faq = { q: string; a: string };

export type ServiceCopy = {
  /** Meta description base (Surrey). */
  meta: string;
  lead: string;
  detail: string;
  faqs: [Faq, Faq, Faq];
};

export const serviceCopy: Record<string, ServiceCopy> = {
  "epoxy-floor-coatings": {
    meta: "Epoxy floor coatings in {c}, BC that seal concrete against oil, tire marks and daily wear. Diamond-ground prep and a seamless, easy-clean finish.",
    lead: "Our epoxy floor coatings in {c}, BC turn bare, dusty concrete into a sealed, seamless surface that resists oil, salt and tire marks. Homeowners in {n1} and {n2} choose us for coatings that are bonded properly, not just rolled on.",
    detail: "Every epoxy floor coating starts with diamond grinding so the resin grips the slab instead of sitting on top of it. We then fill cracks, prime, and apply the coating thickness your traffic needs, finishing with a clear top coat for gloss and chemical resistance.",
    faqs: [
      { q: "How long before I can drive on a new epoxy floor coating in {c}?", a: "Foot traffic is usually fine the next day. Keep vehicles off for about 72 hours so the coating reaches full cure, longer in cold weather." },
      { q: "Will an epoxy floor coating stick to an old painted floor?", a: "Not reliably. We grind old paint and sealers off first, because a coating is only as strong as the surface under it." },
      { q: "What is the difference between an epoxy coating and floor paint?", a: "Floor paint is a thin film that wears and peels. Epoxy is a thick two-part resin that cures into a hard, chemical-resistant layer bonded into the concrete." },
    ],
  },
  "epoxy-flooring": {
    meta: "Epoxy flooring in {c}, BC for garages, basements and shops. Free on-site estimate, slab repair and a complete floor system from one crew.",
    lead: "Looking for epoxy flooring in {c}, BC? We handle the whole floor, from slab assessment and grinding to repairs and the final coat, for properties around {n1}, {n2} and beyond.",
    detail: "Before quoting, we walk the space and test the slab for moisture, cracking and old coatings. That lets us recommend a system that fits how you use the floor, whether it is a quiet basement or a workshop that takes daily abuse.",
    faqs: [
      { q: "How long does epoxy flooring take to install in {c}?", a: "Most two-car garages are finished in one to two days. Larger floors are scheduled in sections so part of the space stays usable." },
      { q: "Can epoxy flooring be installed in winter?", a: "Yes. We use products rated for lower temperatures and heat enclosed spaces when needed, though cure times stretch a little." },
      { q: "Is epoxy flooring worth it compared with bare concrete?", a: "Bare concrete is porous and stains easily. Epoxy flooring seals it, resists spills and makes cleaning a quick mop instead of constant scrubbing." },
    ],
  },
  "commercial-epoxy-flooring": {
    meta: "Commercial epoxy flooring in {c}, BC for retail, clinics and showrooms. After-hours installs and a polished finish built for daily foot traffic.",
    lead: "Commercial epoxy flooring in {c}, BC gives shops, clinics, offices and showrooms a clean, polished surface that holds up to carts, heels and constant cleaning. We work with businesses near {n1} and {n2}.",
    detail: "We schedule installs for evenings and weekends and plan the cure window around your opening time. Slip-resistant additives go into entrances and wet zones, and the finish is chosen to keep its gloss under repeated scrubbing.",
    faqs: [
      { q: "Can you install commercial epoxy flooring after hours in {c}?", a: "Yes. Most commercial jobs run evenings and weekends, and we time the cure so nothing is walked on early." },
      { q: "How do we clean a commercial epoxy floor day to day?", a: "A neutral-pH cleaner with a soft mop or auto-scrubber is enough. Harsh solvents dull the top coat over time." },
      { q: "Can part of the store stay open during installation?", a: "Often, yes. We section the floor so one area cures while another remains in use." },
    ],
  },
  "residential-epoxy-flooring": {
    meta: "Residential epoxy flooring in {c}, BC for garages, basements and laundry rooms. Dust-controlled grinding and an easy-clean finish for your home.",
    lead: "Residential epoxy flooring in {c}, BC makes garages, basements and laundry rooms brighter and far easier to keep clean. We regularly work on homes in {n1} and {n2}.",
    detail: "Our grinders run on vacuum extraction and we mask doorways and thresholds, so the rest of your house stays clean. You choose colour and flake blends from physical samples before any work begins.",
    faqs: [
      { q: "Will residential epoxy flooring make a mess inside my {c} home?", a: "Grinders are connected to vacuum extraction and doorways are masked, so dust stays in the work area. Most homeowners stay in the house during the job." },
      { q: "Does epoxy flooring smell strongly?", a: "Low-odour systems are our default indoors. Any smell clears within a day of ventilation." },
      { q: "Can epoxy be installed over a basement slab?", a: "Yes, after a moisture test. If vapour is high, we add a moisture-mitigating primer before the coating." },
    ],
  },
  "garage-epoxy-flooring": {
    meta: "Garage epoxy flooring in {c}, BC with hot-tire resistance and road-salt protection. Flake and solid systems installed in one to two days.",
    lead: "Garage epoxy flooring in {c}, BC protects your slab from hot tires, road salt, oil drips and winter slush. Garages around {n1} and {n2} get a tough, low-maintenance floor that looks good for years.",
    detail: "We grind the slab, repair control joints and spalls, then install a flake or solid system with a top coat rated for hot-tire pickup. Optional anti-slip grit near the garage door adds traction where rain blows in.",
    faqs: [
      { q: "Why did my last garage floor coating peel in {c}?", a: "Almost always poor prep or a coating not rated for hot tires. Grinding plus a polyaspartic or epoxy system with the right top coat solves both." },
      { q: "How much does garage epoxy flooring cost?", a: "Price depends on garage size, slab condition and the system chosen. We give a free on-site estimate so the quote matches your floor." },
      { q: "Can you coat right up to the garage door?", a: "Yes. We finish to a clean edge at the threshold and can add extra grit there." },
    ],
  },
  "industrial-epoxy-flooring": {
    meta: "Industrial epoxy flooring in {c}, BC for plants, machine shops and equipment bays. Forklift-rated systems with chemical resistance and safety striping.",
    lead: "Industrial epoxy flooring in {c}, BC is built for forklifts, pallet jacks, oils and chemicals. We coat plants, machine shops and equipment bays near {n1} and {n2}.",
    detail: "We size the coating build by load and traffic type, not by square footage, and add chemical-resistant layers where the process needs them. Safety lines, walkways and hazard markings go down in the same install.",
    faqs: [
      { q: "Can you install industrial epoxy flooring around live equipment in {c}?", a: "Yes. We phase the work by bay and mask machinery so production keeps running while other areas are coated." },
      { q: "Will industrial epoxy hold up to forklifts?", a: "A correctly specified heavy-build system handles forklift and pallet-jack traffic. We size it after reviewing the real loads." },
      { q: "Can the floor resist oil and chemical spills?", a: "Yes. We choose resin layers rated for the chemicals in your process and seal joints so spills do not reach the slab." },
    ],
  },
  "metallic-epoxy-flooring": {
    meta: "Metallic epoxy flooring in {c}, BC with one-of-a-kind swirled colour and a deep gloss. Custom finishes for homes, showrooms and offices.",
    lead: "Metallic epoxy flooring in {c}, BC creates a glossy, marbled surface where no two floors look alike. It is a popular upgrade for living spaces, showrooms and garages in {n1} and {n2}.",
    detail: "Metallic pigments are worked through the resin by hand to create depth and movement, then sealed under a protective clear coat. We show you sample boards first so colour and swirl match what you picture.",
    faqs: [
      { q: "How is metallic epoxy flooring in {c} different from standard epoxy?", a: "Metallic epoxy adds reflective pigments that swirl through the resin, creating depth and movement that a solid colour cannot." },
      { q: "Is metallic epoxy flooring slippery?", a: "It is glossy, so we can add a fine anti-slip additive to the top coat where the floor may get wet." },
      { q: "Can metallic epoxy be repaired if it gets damaged?", a: "Small areas can be sanded and recoated. Because each floor is hand-worked, we blend the repair as closely as we can." },
    ],
  },
  "flake-epoxy-flooring": {
    meta: "Flake epoxy flooring in {c}, BC with a speckled, slip-resistant finish that hides dirt. Popular for garages, basements and workshops.",
    lead: "Flake epoxy flooring in {c}, BC is a speckled, textured finish that hides dust and footprints while adding natural grip. It is one of the most requested garage and basement floors around {n1} and {n2}.",
    detail: "Coloured vinyl flakes are broadcast into a wet base coat, scraped, and sealed under a clear top coat. You pick the flake blend, from full coverage to a lighter scatter, using physical samples.",
    faqs: [
      { q: "Does flake epoxy flooring hide dirt well in {c} garages?", a: "Yes. The multi-colour flakes camouflage dust, salt and small stains much better than a plain colour." },
      { q: "Is flake epoxy flooring slip-resistant?", a: "The flake layer adds natural texture, and we can increase grip further with an anti-slip additive in the clear coat." },
      { q: "How thick is a flake epoxy system?", a: "A full-broadcast system is noticeably thicker than a roll-on coating, which is why it wears so well under cars and tools." },
    ],
  },
  "quartz-epoxy-flooring": {
    meta: "Quartz epoxy flooring in {c}, BC with a hard, textured, slip-resistant surface for commercial kitchens, walkways and busy workspaces.",
    lead: "Quartz epoxy flooring in {c}, BC combines coloured quartz sand with resin for a hard, textured, slip-resistant surface. It suits busy workspaces and wet areas near {n1} and {n2}.",
    detail: "The quartz is broadcast into the resin and sealed, creating a dense surface that tolerates impact, abrasion and frequent washdown. Colour blends range from earthy neutrals to bold tones.",
    faqs: [
      { q: "Where is quartz epoxy flooring used in {c}?", a: "It is common in commercial kitchens, wash bays, school hallways and any space that needs traction and heavy wear resistance." },
      { q: "Is quartz epoxy flooring easy to clean?", a: "Yes, once sealed. The texture is fine enough to mop or machine-scrub without trapping dirt." },
      { q: "How does quartz epoxy compare with flake epoxy?", a: "Quartz is harder and more textured, which makes it better for heavy traffic and wet areas. Flake feels smoother underfoot." },
    ],
  },
  "stone-epoxy-flooring": {
    meta: "Stone epoxy flooring in {c}, BC: natural stone pebbles bound in clear resin for patios, entries and pool decks with a durable, textured look.",
    lead: "Stone epoxy flooring in {c}, BC binds natural stone to a clear resin for a textured, decorative surface. It is a lasting choice for entries, patios and walkways in {n1} and {n2}.",
    detail: "Because the stone surface is porous and free-draining in many applications, it handles wet weather well and offers natural grip underfoot. We prepare the base properly so the stone stays locked in for years.",
    faqs: [
      { q: "Can stone epoxy flooring be used outdoors in {c}?", a: "Yes, with a UV-stable binder and a properly sloped, prepared base, it works well on patios, steps and walkways." },
      { q: "Is stone epoxy slippery when wet?", a: "No. The exposed stone gives strong natural traction, which is why it is popular around pools and entries." },
      { q: "How is stone epoxy different from a poured epoxy floor?", a: "Stone epoxy is a textured aggregate surface, while a poured epoxy floor is a smooth, seamless coating." },
    ],
  },
  "polyaspartic-floor-coatings": {
    meta: "Polyaspartic floor coatings in {c}, BC that cure fast, resist UV and handle hot tires. Ideal for garages, patios and quick-turnaround jobs.",
    lead: "Polyaspartic floor coatings in {c}, BC cure far faster than traditional epoxy and resist UV yellowing, so a garage can often be back in use the next day. We coat floors near {n1} and {n2}.",
    detail: "We use polyaspartic as a top coat over a ground and primed slab, or as a full system when speed matters. It stays clear in sunlight, resists hot-tire pickup and handles BC's temperature swings.",
    faqs: [
      { q: "How fast do polyaspartic floor coatings cure in {c}?", a: "Light traffic is often possible within hours, and many floors are drive-on the next day, depending on temperature." },
      { q: "Do polyaspartic coatings yellow in sunlight?", a: "No. Unlike many epoxies, polyaspartic is UV-stable, so it suits garages with bright doors and outdoor slabs." },
      { q: "Is polyaspartic better than epoxy?", a: "It cures faster and resists UV better. Epoxy often builds thickness at a lower cost. We often combine them." },
    ],
  },
  "polyurethane-floor-coatings": {
    meta: "Polyurethane floor coatings in {c}, BC with excellent abrasion, scratch and chemical resistance. A tough clear top coat for high-traffic floors.",
    lead: "Polyurethane floor coatings in {c}, BC add a flexible, scratch-resistant protective layer over epoxy or prepared concrete. They are a common top coat for floors in {n1} and {n2} that see steady traffic.",
    detail: "Polyurethane resists abrasion, staining and many cleaners better than epoxy alone, and it holds colour and gloss. We apply it over a properly profiled base so it bonds for the long term.",
    faqs: [
      { q: "Why add a polyurethane coating over epoxy in {c}?", a: "It protects the epoxy from scratches, scuffs and chemicals, and keeps the surface looking new much longer." },
      { q: "Is polyurethane flooring UV stable?", a: "Aliphatic polyurethane top coats resist UV yellowing, which makes them a good choice for bright spaces." },
      { q: "Can polyurethane be applied directly to concrete?", a: "It can be, but we usually apply it over an epoxy primer for stronger adhesion and moisture protection." },
    ],
  },
  "commercial-floor-coatings": {
    meta: "Commercial floor coatings in {c}, BC for offices, retail and public spaces. Durable, low-maintenance finishes installed with minimal disruption.",
    lead: "Commercial floor coatings in {c}, BC protect and refresh the concrete in offices, stores, studios and service counters. We work with property managers and owners near {n1} and {n2}.",
    detail: "We choose a coating by traffic, cleaning method and look, from satin and matte to full gloss. Work is scheduled around trading hours and sectioned so your team keeps working.",
    faqs: [
      { q: "What are commercial floor coatings used for in {c}?", a: "They seal worn concrete in retail, offices and service areas, making floors easier to clean and more presentable." },
      { q: "How long do commercial floor coatings last?", a: "With proper prep and maintenance, many commercial coatings last well over a decade, depending on traffic." },
      { q: "Do commercial floor coatings need a lot of maintenance?", a: "No. Regular sweeping and neutral-pH mopping is usually enough." },
    ],
  },
  "restaurant-floor-coatings": {
    meta: "Restaurant epoxy flooring in {c}, BC that is slip-resistant, easy to sanitize and tough on grease. Seamless floors for kitchens and dining rooms.",
    lead: "Restaurant epoxy flooring in {c}, BC gives kitchens, prep areas and dining rooms a seamless, slip-resistant surface that handles grease, hot water and heavy foot traffic. We serve restaurants near {n1} and {n2}.",
    detail: "A seamless floor leaves no grout lines for bacteria to hide in, and coved edges at the walls make sanitizing quick. We install overnight where possible so service is not interrupted.",
    faqs: [
      { q: "Is restaurant epoxy flooring in {c} slip-resistant?", a: "Yes. We add grit or use quartz broadcast in kitchens and wet zones so staff have traction when floors are damp." },
      { q: "Can the floor handle hot oil and steam?", a: "Systems specified for commercial kitchens tolerate hot water, grease and cleaning chemicals." },
      { q: "How long will my restaurant be closed for the install?", a: "Often a single night or weekend, planned around cure times so you can reopen on schedule." },
    ],
  },
  "commercial-kitchen-floor-coatings": {
    meta: "Commercial kitchen floor coatings in {c}, BC with thermal shock resistance, coved edges and slip-resistant texture for food service operations.",
    lead: "Commercial kitchen floor coatings in {c}, BC are built to withstand daily thermal shock, grease and aggressive washdowns. We coat cooking lines, walk-ins and prep areas near {n1} and {n2}.",
    detail: "We use heavy-duty urethane or epoxy systems that tolerate sudden temperature changes without cracking, with coved bases and sealed drains for easy sanitation. Slip-resistant texture keeps staff safe.",
    faqs: [
      { q: "What makes a commercial kitchen floor coating in {c} different?", a: "It must survive hot water, thermal shock and grease, so we use heavier systems than a regular commercial floor." },
      { q: "Do commercial kitchen floors need coving?", a: "Yes. A coved base seals the wall-to-floor joint, making it easier to clean and inspect." },
      { q: "Will the coating pass health inspection?", a: "Seamless, non-porous floors support sanitation standards. We recommend confirming local health authority requirements for your space." },
    ],
  },
  "food-safe-floor-coatings": {
    meta: "Food-safe floor coatings in {c}, BC for processing, bakeries and cold storage. Seamless, non-porous, antimicrobial-friendly surfaces.",
    lead: "Food-safe floor coatings in {c}, BC create seamless, non-porous surfaces for processing rooms, bakeries, cold storage and prep areas. Facilities near {n1} and {n2} rely on them to meet cleaning standards.",
    detail: "We choose low-VOC resins and add coved bases and sealed joints so there is nowhere for contamination to collect. Coatings tolerate frequent sanitizing and, where needed, cold or wet conditions.",
    faqs: [
      { q: "What are food-safe floor coatings used for in {c}?", a: "They are used in processing plants, bakeries, breweries, cold rooms and prep kitchens that need a hygienic floor." },
      { q: "Can food-safe coatings handle washdowns?", a: "Yes. Seamless coatings are designed for frequent washing with hot water and sanitizing chemicals." },
      { q: "Can these coatings be installed in cold storage?", a: "Yes, with systems rated for low temperatures and proper moisture control in the slab." },
    ],
  },
  "warehouse-floor-coatings": {
    meta: "Warehouse floor coatings in {c}, BC that cut dust, resist forklift wear and add safety line marking. Phased installs keep operations moving.",
    lead: "Warehouse floor coatings in {c}, BC reduce concrete dusting, resist forklift wear and give you a bright, easy-to-sweep floor. We work with facilities near {n1} and {n2}.",
    detail: "A coating also lets you add aisle lines, pedestrian walkways and rack markings that stay clear for years. We phase the work in zones so shipping and receiving continue.",
    faqs: [
      { q: "Why coat a warehouse floor in {c}?", a: "Coatings stop concrete dust, protect against forklift abrasion and make cleaning and line marking simpler." },
      { q: "Can you work in sections so operations continue?", a: "Yes. We schedule by bay or aisle so only part of the floor is out of service at a time." },
      { q: "Do you add safety line markings?", a: "Yes. Aisles, pedestrian lanes and hazard zones can be striped in the same visit." },
    ],
  },
  "parkade-floor-coatings": {
    meta: "Parkade floor coatings in {c}, BC that resist road salt, water and tire wear. Traffic-deck systems for strata and commercial parking structures.",
    lead: "Parkade floor coatings in {c}, BC protect concrete decks and ramps from road salt, water and constant tire wear. Strata corporations and owners near {n1} and {n2} use them to extend slab life.",
    detail: "A coated parkade resists chloride intrusion that leads to rebar corrosion, and ramps are built with extra grip. We phase installs by level so residents or tenants can keep parking.",
    faqs: [
      { q: "Why coat a parkade in {c}?", a: "Coatings keep road salt and moisture out of the slab, which helps prevent costly concrete and rebar damage." },
      { q: "Do you handle the ramps too?", a: "Yes. Ramps get an extra-grip build because tires scrub hardest there and water runs fastest." },
      { q: "Can residents keep using the parkade during the work?", a: "We phase work by level or section so access is maintained wherever possible." },
    ],
  },
  "marble-floor-installation": {
    meta: "Marble floor installation in {c}, BC on a levelled, properly primed base. Precise layout, correct adhesives and sealing for lasting beauty.",
    lead: "Marble floor installation in {c}, BC requires a perfectly level base and careful setting. We install marble in entries, bathrooms and living areas near {n1} and {n2}.",
    detail: "We level and prime the substrate, plan the layout around veining and sightlines, set the stone with the right adhesive, then grout and seal so staining is resisted from the first day.",
    faqs: [
      { q: "Do you supply the marble for installation in {c}?", a: "Either way. Many clients choose slabs at a supplier and we handle preparation, setting and sealing." },
      { q: "How often does marble need resealing?", a: "Usually every one to two years in a busy area, sooner in a kitchen or bathroom with acidic spills." },
      { q: "Can marble be installed over concrete?", a: "Yes, once the slab is clean, level and moisture tested." },
    ],
  },
  "floor-installation": {
    meta: "Flooring installation in {c}, BC with moisture testing, levelling and clean transitions. A complete floor package for renovations and new builds.",
    lead: "Flooring installation in {c}, BC starts below the surface: moisture testing, levelling and priming come first. We install floors in renovations and new builds around {n1} and {n2}.",
    detail: "We install to the manufacturer's specification so warranties stay valid, detail transitions and thresholds cleanly, and leave the site tidy and ready to use.",
    faqs: [
      { q: "Do you remove the old floor before installation in {c}?", a: "Yes. Removal and disposal can be included, including glued-down and tiled finishes." },
      { q: "Can you work alongside other trades?", a: "We coordinate with your builder so the floor goes in at the right point in the schedule." },
      { q: "Why does moisture testing matter?", a: "Excess slab moisture can ruin a new floor. Testing first avoids lifting, bubbling and mould later." },
    ],
  },
  "flooring-repair": {
    meta: "Flooring repair in {c}, BC for cracks, chips, loose sections and worn areas. Assessed, durable repairs that blend with your existing floor.",
    lead: "Flooring repair in {c}, BC stops small problems from becoming full replacements. We fix cracks, chips, spalls and failing sections for homes and businesses near {n1} and {n2}.",
    detail: "We identify the cause of the damage first, then pick a repair that suits the material and underlying slab. The goal is a stable, safe surface that blends into the surrounding floor.",
    faqs: [
      { q: "Can you repair just the damaged section of my floor in {c}?", a: "Often, yes. We assess whether a localized repair will hold or if a larger area needs attention." },
      { q: "Will the repair be invisible?", a: "Some finishes blend better than others. We explain the expected appearance before starting." },
      { q: "What causes concrete floors to crack?", a: "Shrinkage, settling, heavy loads and moisture are common causes. We repair the crack and discuss prevention." },
    ],
  },
  "flooring-maintenance": {
    meta: "Flooring maintenance in {c}, BC: cleaning guidance, surface refresh and early repair advice to extend the life of coated and concrete floors.",
    lead: "Flooring maintenance in {c}, BC keeps coated and concrete floors performing and looking their best. Owners near {n1} and {n2} rely on our checkups to catch wear before it becomes costly.",
    detail: "We check the finish, recommend cleaning products suited to it, and offer light recoat or refresh options for worn traffic lanes. Small cracks or coating wear are handled early.",
    faqs: [
      { q: "How should I clean a coated floor in {c}?", a: "Sweep regularly and mop with a neutral-pH cleaner. Avoid harsh solvents and abrasive pads." },
      { q: "How often should floors be inspected?", a: "A yearly look at joints, entries and high-traffic lanes is enough to catch most problems early." },
      { q: "Can a worn coating be refreshed instead of replaced?", a: "Often. A light abrade and recoat can restore protection and appearance at much lower cost." },
    ],
  },
  "flooring-replacement": {
    meta: "Flooring replacement in {c}, BC: safe removal, slab repair and a fresh, durable new floor for worn or damaged surfaces.",
    lead: "Flooring replacement in {c}, BC is the right call when a floor is worn beyond repair. We remove the old finish and install a new one for homes and businesses near {n1} and {n2}.",
    detail: "After removal we inspect and repair the slab, then prepare it for the new system so the replacement lasts. We manage disposal and leave the site clean.",
    faqs: [
      { q: "How do I know my floor needs replacing in {c}?", a: "Widespread peeling, deep cracking, persistent moisture damage or loose sections usually mean replacement is better than patching." },
      { q: "Do you handle removal and disposal?", a: "Yes. Removal and disposal of the old floor can be included in the quote." },
      { q: "How long does replacement take?", a: "Most residential spaces take a few days including removal, prep and installation." },
    ],
  },
  "epoxy-floor-installation": {
    meta: "Epoxy floor installation in {c}, BC step by step: assessment, grinding, repair, base coat, flake or quartz broadcast and a clear top coat.",
    lead: "Epoxy floor installation in {c}, BC follows a clear process: assess, moisture test, grind, repair, prime, apply and seal. Customers near {n1} and {n2} know what to expect on install day.",
    detail: "We broadcast flake or quartz if you have chosen it, scrape and vacuum, apply the clear top coat, and walk the finished floor with you before leaving. You get a written quote that names the system.",
    faqs: [
      { q: "Do I need to be home during epoxy floor installation in {c}?", a: "Only for the start and the final walkthrough. We arrange access for the rest." },
      { q: "What do you need from me before install day?", a: "A clear floor, access to power and water, and a parking spot for the trailer." },
      { q: "How long does the process take?", a: "Most garages take one to two days. Larger spaces are scheduled in phases." },
    ],
  },
  "epoxy-coating-contractor": {
    meta: "Epoxy coating contractor in {c}, BC: insured, WCB-covered local crew with written quotes, dependable scheduling and workmanship warranty.",
    lead: "Choosing an epoxy coating contractor in {c}, BC matters more than the product, because the same resin can last fifteen years or fail in one. We are a local crew serving {n1}, {n2} and nearby neighbourhoods.",
    detail: "We are insured and WCB covered, quote in writing with the system named, and schedule honestly. Every install carries a workmanship warranty with the terms set out before you commit.",
    faqs: [
      { q: "Can I see previous jobs from your {c} epoxy coating crew?", a: "Yes. We can show recent local installs and connect you with past customers near you." },
      { q: "Do you offer a warranty?", a: "Every install carries a workmanship warranty, with terms in the quote before you commit." },
      { q: "What should I ask an epoxy coating contractor?", a: "Ask how they prepare the slab, what products they use, whether they are insured and what the warranty covers." },
    ],
  },
};

export type AreaCopy = {
  intro: string;
  local: string;
  secondary: string;
  faqs: [Faq, Faq, Faq];
};

export const areaCopy: Record<string, AreaCopy> = {
  surrey: {
    intro: "Pacific Floors and Coatings is based in Surrey, so we know the garages, shops and warehouses here well. We install metallic, flake and solid epoxy flooring in Surrey, BC for homeowners and businesses from Newton to Cloverdale.",
    local: "Surrey's mix of newer townhome garages and large Campbell Heights industrial units means slab conditions vary widely, so we test every floor before recommending a system",
    secondary: "garage floor epoxy Surrey, commercial epoxy flooring Surrey BC, epoxy floor contractor Surrey",
    faqs: [
      { q: "How much does epoxy flooring cost in Surrey, BC?", a: "Pricing depends on size, slab condition and the system. We provide free on-site estimates anywhere in Surrey." },
      { q: "Which Surrey neighbourhoods do you serve?", a: "We cover Newton, Guildford, Fleetwood, Cloverdale, South Surrey, Whalley, Panorama Ridge, Campbell Heights, Port Kells and Fraser Heights." },
      { q: "Can you install epoxy floors in a new Surrey townhome garage?", a: "Yes. New slabs need to cure first, and we advise on timing and moisture testing before coating." },
    ],
  },
  vancouver: {
    intro: "Epoxy flooring in Vancouver, BC needs to handle damp climates and tight urban sites. Our crew installs durable garage, basement and commercial floors across Vancouver with careful, dust-controlled preparation.",
    local: "Vancouver's older basements and rain-heavy conditions mean moisture testing matters before any coating goes down",
    secondary: "garage epoxy flooring Vancouver, basement epoxy floor Vancouver BC, commercial epoxy Vancouver",
    faqs: [
      { q: "Do you install epoxy flooring in older Vancouver basements?", a: "Yes. We moisture test first and use a vapour-mitigating primer when readings are high." },
      { q: "Can you work in a condo or strata parkade in Vancouver?", a: "Yes. We coordinate with strata councils and phase work by section." },
      { q: "How far in advance should I book epoxy flooring in Vancouver?", a: "Usually a couple of weeks, though we try to fit urgent commercial work sooner." },
    ],
  },
  burnaby: {
    intro: "We provide epoxy flooring in Burnaby, BC for residential garages, strata parkades and light-industrial shops. Every Burnaby floor gets diamond grinding and a coating system matched to the way it is used.",
    local: "Burnaby's mix of strata parkades, hillside garages and industrial units around Big Bend calls for coatings that suit very different loads",
    secondary: "epoxy floor coating Burnaby, parkade floor coating Burnaby BC, industrial epoxy Burnaby",
    faqs: [
      { q: "Do you coat strata parkades in Burnaby?", a: "Yes. We phase installs by level and add extra grip on ramps." },
      { q: "Can you handle garages on Burnaby's sloped lots?", a: "Yes. We level low spots and adjust the coating to manage drainage near the garage door." },
      { q: "Do you offer epoxy flooring for Big Bend industrial units?", a: "Yes. We install forklift-rated systems and safety line marking." },
    ],
  },
  richmond: {
    intro: "Epoxy flooring in Richmond, BC must cope with a high water table and flat, sometimes damp slabs. We build moisture-aware coating systems for Richmond garages, warehouses and workshops.",
    local: "Richmond's low-lying ground raises slab moisture, so we test vapour levels before coating any floor",
    secondary: "garage floor epoxy Richmond BC, warehouse floor coating Richmond, moisture-resistant epoxy Richmond",
    faqs: [
      { q: "Is moisture a problem for epoxy floors in Richmond?", a: "It can be. We test every slab and use a moisture-mitigating primer when needed." },
      { q: "Do you serve Steveston and Bridgeport?", a: "Yes. We install epoxy flooring in both, from home garages to warehouse floors." },
      { q: "Can warehouse floors in Richmond be coated without shutting down?", a: "Yes, we section the floor and work by bay." },
    ],
  },
  coquitlam: {
    intro: "Our crew installs epoxy flooring in Coquitlam, BC for garages, basements and workshops. We also serve Port Coquitlam and Port Moody with clean, dust-controlled installs.",
    local: "Coquitlam homes on hillside lots often have large finished basements and garages that benefit from a seamless, easy-clean coating",
    secondary: "basement epoxy flooring Coquitlam, garage epoxy Coquitlam BC, epoxy floor Port Coquitlam",
    faqs: [
      { q: "Do you do epoxy flooring in Port Coquitlam and Port Moody?", a: "Yes. Both are part of our regular Coquitlam service area." },
      { q: "Can you coat finished basements in Coquitlam?", a: "Yes, with low-odour products and dust extraction so the rest of the home stays clean." },
      { q: "What is a popular finish for Burke Mountain homes?", a: "Flake and metallic epoxy are the most requested for garages and living spaces." },
    ],
  },
  langley: {
    intro: "From hobby garages to acreage shops, we install epoxy flooring in Langley, BC with tough flake and solid systems. We serve both Langley City and Township.",
    local: "Langley's acreage outbuildings and large shop floors need heavier builds than a typical suburban garage",
    secondary: "shop floor epoxy Langley, garage epoxy flooring Langley BC, epoxy floor Aldergrove",
    faqs: [
      { q: "Do you install epoxy in Langley Township shops and barns?", a: "Yes. We specify the build by use, from workshops to equipment storage." },
      { q: "Can you coat floors in Fort Langley and Aldergrove?", a: "Yes. Both are regular service locations." },
      { q: "Is epoxy suitable for an unheated Langley shop?", a: "Yes, with cold-rated products and proper scheduling around temperature." },
    ],
  },
  delta: {
    intro: "Epoxy flooring in Delta, BC gives North Delta, Ladner and Tsawwassen homeowners a slip-resistant, easy-clean floor. We also coat Tilbury industrial and commercial spaces.",
    local: "Delta's mix of family homes and Tilbury industrial sites means we install everything from decorative garage floors to forklift-rated coatings",
    secondary: "garage epoxy floor Delta BC, epoxy flooring Tsawwassen, industrial epoxy Tilbury",
    faqs: [
      { q: "Do you serve Ladner and Tsawwassen?", a: "Yes. We install epoxy floors in both, as well as North Delta." },
      { q: "Can you coat Tilbury industrial floors?", a: "Yes, with heavy-build systems and safety line marking." },
      { q: "Is epoxy flooring good near the coast in Delta?", a: "Yes. It resists salt and moisture when installed over a properly prepared slab." },
    ],
  },
  "white-rock": {
    intro: "White Rock homes and small businesses choose epoxy flooring in White Rock, BC for sealed concrete and metallic finishes that stand up to salt air and moisture.",
    local: "White Rock's coastal air and compact lots make salt-resistant, easy-clean floors especially useful",
    secondary: "metallic epoxy White Rock, sealed concrete floor White Rock BC, garage epoxy Crescent Beach",
    faqs: [
      { q: "Does salt air damage epoxy flooring in White Rock?", a: "A well-prepared epoxy or polyaspartic floor resists salt and moisture far better than bare concrete." },
      { q: "Do you serve Crescent Beach and Ocean Park?", a: "Yes. Both are within our White Rock service area." },
      { q: "What finish is popular in White Rock homes?", a: "Metallic epoxy and light flake blends are the most requested." },
    ],
  },
  "new-westminster": {
    intro: "Older slabs are our specialty. We install epoxy flooring in New Westminster, BC with crack repair, diamond grinding and durable coatings for heritage garages and Queensborough shops.",
    local: "New Westminster's older homes and early-century buildings often have cracked or uneven slabs that need repair before coating",
    secondary: "epoxy floor repair New Westminster, heritage garage epoxy, Queensborough epoxy flooring",
    faqs: [
      { q: "Can you coat an old, cracked slab in New Westminster?", a: "Yes. We repair cracks and spalls, grind the surface and apply a system suited to the condition." },
      { q: "Do you work in Queensborough?", a: "Yes. We serve residential and commercial properties there." },
      { q: "Will epoxy hide uneven concrete?", a: "It can level minor unevenness, but major dips are repaired first." },
    ],
  },
  "maple-ridge": {
    intro: "We install epoxy flooring in Maple Ridge, BC and Pitt Meadows for garages, workshops and equipment bays with heavy-duty coatings built to last.",
    local: "Maple Ridge's larger rural lots and detached shops often need coatings that tolerate heavy equipment and cold starts",
    secondary: "workshop epoxy flooring Maple Ridge, garage floor Pitt Meadows, heavy-duty epoxy Maple Ridge BC",
    faqs: [
      { q: "Do you serve Pitt Meadows and Albion?", a: "Yes. Both are part of our Maple Ridge service area." },
      { q: "Can you coat a detached workshop in Maple Ridge?", a: "Yes. We build the system for your equipment and traffic." },
      { q: "Is epoxy good for a workshop that gets cold?", a: "Yes, with cold-rated resins and appropriate scheduling." },
    ],
  },
  abbotsford: {
    intro: "Large shops, agricultural buildings and family garages across Abbotsford, BC benefit from epoxy flooring installed on schedule and with clear pricing.",
    local: "Abbotsford's agricultural buildings and large commercial bays need durable, washable floors that stand up to equipment",
    secondary: "agricultural epoxy flooring Abbotsford, shop floor coating Abbotsford BC, garage epoxy Clearbrook",
    faqs: [
      { q: "Do you coat agricultural buildings in Abbotsford?", a: "Yes. We install washable, durable floors for barns, packing areas and equipment bays." },
      { q: "Can you work in Sumas Prairie and Matsqui?", a: "Yes. We serve both." },
      { q: "How is pricing handled for large Abbotsford shops?", a: "We quote by square footage and condition after a free on-site visit." },
    ],
  },
};

// ---- Neighbourhood copy pools (picked by neighbourhood position inside its city) ----

export const nbIntroPool = [
  "Homeowners in {n} trust us for epoxy flooring that turns a bare garage slab into a clean, durable surface.",
  "In {n}, we regularly coat basements and garages with epoxy that is easy to mop and resists stains.",
  "Looking for epoxy flooring in {n}? Our crew installs seamless floors for homes and small businesses nearby.",
  "{n} properties get diamond-ground, properly prepared epoxy floors with a finish chosen to suit their use.",
  "We install epoxy flooring in {n} for owners who want a long-lasting upgrade over plain concrete.",
  "Epoxy flooring in {n} is one of our most requested services for garages, workshops and shop floors.",
  "From garages to commercial bays, we bring clean, dust-controlled epoxy installs to {n}.",
  "Our {n} customers choose epoxy for its seamless finish, chemical resistance and low maintenance.",
];

export const nbDetailPool = [
  "We start with a free on-site estimate, test the slab, and recommend a metallic, flake or solid system to match your space.",
  "Each job includes diamond grinding, crack repair and a clear top coat, so the floor is bonded and sealed from edge to edge.",
  "Colour and flake blends are chosen from physical samples before work starts, so there are no surprises on finish day.",
  "We mask doorways and use vacuum-connected grinders to keep dust out of the rest of the property.",
  "Light foot traffic is typically fine after a day, with vehicles back on the floor in about three days.",
  "Anti-slip additives can be added near doors and wet areas for extra grip.",
  "Installs are scheduled around your availability, including evenings and weekends for businesses.",
  "We explain the system, thickness and warranty in writing before you commit.",
];

export const nbFaqPool: Faq[] = [
  { q: "Do you offer free estimates for epoxy flooring in {n}?", a: "Yes. We visit your {n} property, assess the slab and give a written quote." },
  { q: "How long does an epoxy floor take in {n}?", a: "Most garages near {n} are finished in one to two days, with a few days before vehicles return." },
  { q: "What epoxy finish do {n} customers choose most?", a: "Flake and metallic are the most common choices, with solid colours for workshops." },
  { q: "Can you install epoxy over my existing {n} garage floor?", a: "Yes, after grinding off any old coatings and repairing cracks so the new system bonds properly." },
  { q: "Is epoxy flooring suitable for a {n} basement?", a: "Yes, once the slab passes a moisture test. We use low-odour products indoors." },
  { q: "How do I maintain my epoxy floor in {n}?", a: "Sweep regularly and mop with a neutral cleaner. Avoid harsh solvents." },
];

export function fill(text: string, vars: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");
}

export function servicePageCopy(slug: string, city: { name: string; neighbourhoods: string[] }) {
  const sc = serviceCopy[slug];
  if (!sc) return null;
  const vars = { c: city.name, n1: city.neighbourhoods[0] ?? city.name, n2: city.neighbourhoods[1] ?? city.name };
  const ac = areaCopy[city.name.toLowerCase().replace(/\s+/g, "-")];
  return {
    meta: fill(sc.meta, vars),
    lead: fill(sc.lead, vars),
    detail: fill(sc.detail, vars),
    local: ac ? `${ac.local}.` : "",
    secondary: secondarySentence(slug, city.name),
    faqs: sc.faqs.map((f) => ({ q: fill(f.q, vars), a: fill(f.a, vars) })),
  };
}

export function neighbourhoodCopy(name: string, city: string, index: number, siblings: string[]) {
  const n = name;
  const vars = { n, c: city };
  const near = siblings.filter((s) => s !== name).slice(0, 3);
  return {
    intro: fill(nbIntroPool[index % nbIntroPool.length], vars),
    detail: fill(nbDetailPool[(index * 3 + 1) % nbDetailPool.length], vars),
    nearby: near.length
      ? `We also serve nearby ${near.join(", ")} and the rest of ${city}, BC.`
      : `We also serve the rest of ${city}, BC.`,
    secondary: `We also install garage floor epoxy, epoxy floor coatings and commercial epoxy flooring in ${name}, ${city}.`,
    faqs: [
      nbFaqPool[index % nbFaqPool.length],
      nbFaqPool[(index + 2) % nbFaqPool.length],
      nbFaqPool[(index + 4) % nbFaqPool.length],
    ].map((f) => ({ q: fill(f.q, vars), a: fill(f.a, vars) })),
  };
}

export const serviceSecondary: Record<string, [string, string]> = {
  "epoxy-floor-coatings": ["concrete epoxy coating", "epoxy garage floor coating"],
  "epoxy-flooring": ["epoxy floor contractor", "seamless epoxy floors"],
  "commercial-epoxy-flooring": ["commercial epoxy floor coating", "retail epoxy floors"],
  "residential-epoxy-flooring": ["home epoxy floors", "basement epoxy flooring"],
  "garage-epoxy-flooring": ["garage floor epoxy", "epoxy garage floor coating"],
  "industrial-epoxy-flooring": ["industrial floor coatings", "warehouse epoxy floors"],
  "metallic-epoxy-flooring": ["metallic epoxy floor coating", "marble epoxy floors"],
  "flake-epoxy-flooring": ["flake garage floor", "decorative flake epoxy"],
  "quartz-epoxy-flooring": ["quartz floor coating", "broadcast quartz epoxy"],
  "stone-epoxy-flooring": ["stone carpet flooring", "pebble epoxy flooring"],
  "polyaspartic-floor-coatings": ["polyaspartic garage floor", "polyaspartic concrete coating"],
  "polyurethane-floor-coatings": ["polyurethane concrete coating", "urethane top coat"],
  "commercial-floor-coatings": ["commercial concrete coating", "office floor coatings"],
  "restaurant-floor-coatings": ["restaurant floor coating", "slip-resistant restaurant floors"],
  "commercial-kitchen-floor-coatings": ["commercial kitchen epoxy", "kitchen floor coating"],
  "food-safe-floor-coatings": ["food grade flooring", "food processing floor coatings"],
  "warehouse-floor-coatings": ["warehouse epoxy flooring", "forklift-rated floor coating"],
  "parkade-floor-coatings": ["parking garage floor coating", "strata parkade coating"],
  "marble-floor-installation": ["marble flooring installer", "natural stone floor installation"],
  "floor-installation": ["floor installers", "new floor installation"],
  "flooring-repair": ["concrete floor repair", "floor crack repair"],
  "flooring-maintenance": ["floor care services", "epoxy floor maintenance"],
  "flooring-replacement": ["floor removal and replacement", "old floor replacement"],
  "epoxy-floor-installation": ["epoxy floor installers", "epoxy flooring installation process"],
  "epoxy-coating-contractor": ["epoxy flooring contractor", "concrete coating contractor"],
};

const secondaryTemplates = [
  "Whether you are searching for {k0} or {k1} in {c}, we will recommend the system that suits your slab.",
  "We also handle {k0} and {k1} across {c}, BC.",
  "Property owners in {c} often ask us about {k0} and {k1}, and both start with the same prep-first approach.",
  "Need {k0} or {k1} in {c}? Request a free on-site estimate.",
];

export function secondarySentence(slug: string, city: string): string {
  const kws = serviceSecondary[slug];
  if (!kws) return "";
  const idx = Object.keys(serviceSecondary).indexOf(slug);
  return fill(secondaryTemplates[idx % secondaryTemplates.length], { k0: kws[0], k1: kws[1], c: city });
}

export function areaSecondarySentence(slug: string): string {
  const ac = areaCopy[slug];
  if (!ac) return "";
  const list = ac.secondary.split(",").map((x) => x.trim());
  return `Popular here: ${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}.`;
}
