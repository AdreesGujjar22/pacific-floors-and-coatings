export type Review = {
  name: string;
  location: string;
  text: string;
  rating: number;
  relativeTime: string;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    name: "Sukhvir Sodhi",
    location: "Coquitlam, BC",
    text: "Pacific Floors and Coatings did garage epoxy coating for our garage in Coquitlam. It was an outstanding job at a reasonable price. We contacted a bunch of epoxy contractors, but they stood out in terms of knowledge, price, and delivery date. Highly recommend them if anybody needs epoxy coating services.",
    rating: 5,
    relativeTime: "2 months ago",
    verified: true,
  },
  {
    name: "Pedraum Moghari",
    location: "Richmond, BC",
    text: "We got in touch with them through one of our friends. We had a big project in Richmond where we were doing different kinds of flooring and epoxy based on the requirements. Pacific Floors and Coatings handled it with great strategy and craftsmanship. Their prep work skills are definitely worth mentioning, as they spent a good amount of time getting the floors levelled. We were satisfied with the results, and the best thing is they handled it all. It’s basically a one-stop shop for all kinds of flooring. Highly recommend them for any kind of flooring.",
    rating: 5,
    relativeTime: "A month ago",
    verified: true,
  },
  {
    name: "Saba Mahmood",
    location: "Port Coquitlam, BC",
    text: "Pacific Floors and Coatings did a great job doing a polyaspartic flake floor in our garage in Port Coquitlam. Scheduling took a little while, but the wait was worth it. Highly trusted guys. One of the top-notch epoxy companies in the Lower Mainland.",
    rating: 5,
    relativeTime: "A month ago",
    verified: true,
  },
  {
    name: "Arminder Singh",
    location: "Lower Mainland, BC",
    text: "Great price. We had our warehouse floor redone by these guys. Quick turnaround, professional communication, good quality material, and thorough prep work. They had the polyaspartic system installed with silica sand broadcast as per our needs for the area. Best epoxy company in the Lower Mainland.",
    rating: 5,
    relativeTime: "5 days ago",
    verified: true,
  },
];
