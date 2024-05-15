type Business = {
  id: number;
  name: string;
  location: string;
  type?: 'bar' | 'restaurant' | 'club' | 'hotel' | 'cafe';
};

type Staff = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: 'kitchen' | 'service' | 'PR';
  business: Business;
  phoneNumber?: string;
};