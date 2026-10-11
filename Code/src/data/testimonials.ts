export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  location: string;
  projectType: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    quote: "SMK Interior transformed our 3BHK flat on ECR into a magazine-worthy sanctuary. Their team executed the factory production and on-site assembly with absolute precision.",
    clientName: "Rajesh & Priya Sundaram",
    location: "ECR, Chennai",
    projectType: "3BHK Complete Home Interior",
    rating: 5
  },
  {
    id: "t2",
    quote: "Our modular kitchen from SMK Interior is incredible. The soft-close Blum hardware, waterproof marine plywood, and quartz countertop handle heavy Indian cooking effortlesly.",
    clientName: "Anand & Meera Chandran",
    location: "Anna Nagar, Chennai",
    projectType: "Modular Kitchen Overhaul",
    rating: 5
  },
  {
    id: "t3",
    quote: "Working with SMK Interior was smooth and transparent. Their 3D renders were exactly what got delivered. No hidden costs or timeline delays.",
    clientName: "Siddharth Raman",
    location: "Velachery, Chennai",
    projectType: "2BHK Interior Design",
    rating: 5
  },
  {
    id: "t4",
    quote: "They handled our tech startup's 4,000 sq ft office interior in Nungambakkam in under 45 days. The acoustic glass conference rooms and break-out lounge are a hit!",
    clientName: "Karthik Subramanian",
    location: "Nungambakkam, Chennai",
    projectType: "Corporate Office Fitout",
    rating: 5
  }
];
