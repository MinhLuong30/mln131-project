// Common types used throughout the application

export interface NavigationLink {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}