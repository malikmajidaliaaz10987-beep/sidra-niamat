export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  format: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  sessionType: 'in-person' | 'online';
  preferredDate: string;
  preferredTime: string;
  reason: string;
  message: string;
}

export interface PracticeInfo {
  name: string;
  title: string;
  city: string;
  country: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  clinicAddress: string;
  businessHours: string;
  qualifications: string[];
  areasOfInterest: string[];
}
