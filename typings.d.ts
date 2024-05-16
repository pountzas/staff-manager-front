type Business = {
  id: number;
  name: string;
  location: string;
  type?: "bar" | "restaurant" | "club" | "hotel" | "cafe";
};

type Staff = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  position: "kitchen" | "service" | "PR";
  business: Business;
  phoneNumber?: string;
};
