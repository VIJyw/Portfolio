export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I had the pleasure of managing Vijay at the Great Manager Institute for 1.5 years. His exceptional analytical skills and impactful presentations consistently impressed our clients. Vijay also excelled in managing logistics for the Great Manager Summit League, ensuring a seamless event for the top 100 managers. His dedication, professionalism, and attention to detail make him a valuable asset to any team.",
    name: "Sunny Puthran",
    title: "Strategic Leader - Customer Experience & Operations",
    company: "Great Manager Institute",
    relationship: "Direct Manager",
    featured: true,
  },
  {
    quote:
      "Working with Vijay has been an absolute delight. He's a rockstar at creating presentations and nailing analytics. During the Great People Manager Awards 2023, he proved to be the dependable team member everyone wishes for. His dedication, keen attention to detail, and collaborative spirit make him an indispensable asset.",
    name: "Yashasvi Jaiswal",
    title: "Team Member",
    company: "Great Manager Institute",
    relationship: "Colleague",
    featured: true,
  },
  {
    quote:
      "Vijay's ability to create good visualizations from data is commendable. He is also committed to timelines and delivers quality in time. Vijay is a team player and very receptive to feedback.",
    name: "Shivangi Shinari",
    title: "Enterprise Sales & Account Management",
    company: "Great Manager Institute",
    relationship: "Senior Colleague",
    featured: false,
  },
];
