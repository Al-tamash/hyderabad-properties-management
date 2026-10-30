export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
    foundedYear: number;
    city: string;
    url: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsappNumber: string;
    email: string;
    officeAddress: string;
    workingHours: string;
  };
  localities: string[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Hyderabad Properties Management",
    tagline: "Property Management Hyderabad",
    description: "Hyderabad Properties Management looks after flats, apartments, villas and commercial property in Hyderabad, with verified tenants, photo-verified repairs and clear monthly reports.",
    foundedYear: 2009,
    city: "Hyderabad, Telangana",
    url: "https://www.hyderabadpropertiesmanagement.com",
  },
  contact: {
    phone: "+919502786217",
    phoneDisplay: "+91 95027 86217",
    whatsappNumber: "919502786217",
    email: "info@hyderabadpropertiesmanagement.com",
    officeAddress: "12-2-826/A/46 first floor LIC Colony Beside Bus Depot Mehdipatnam Hyderabad",
    workingHours: "10 AM - 6 PM",
  },
  localities: [
    "Gachibowli", "Kondapur", "Tellapur", "Shankarpally", "Kokapet", "Shamshabad",
    "Hitec City", "Madhapur", "Financial District", "Nanakramguda", "Narsingi",
    "Jubilee Hills", "Banjara Hills", "Moinabad", "Chevella", "Maheshwaram"
  ],
};
