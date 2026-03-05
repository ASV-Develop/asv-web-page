export interface CompanyInfo {
  name: string;
  tagline: string;
  yearsExperience: number;
  description: string;
  mission: string;
  vision: string;
  commitment: string;
}

export interface ContactInfo {
  address: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
  image: string;
}

export interface CompanyServices {
  image: string;
  title: string;
  description: string;
  items: ServiceItems[];
  evidences: EvidenceItems[];
}

export interface ServiceItems {
  title: string;
  svg: string;
}

export interface EvidenceItems {
  imgUrl: string;
  alt: string;
}

export interface Brand {
  name: string;
  logoUrl: string | null;
}

export interface SiteContent {
  company: CompanyInfo;
  contact: ContactInfo;
  services: Service[];
  companyServices: CompanyServices;
  brands: Brand[];
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavItem[];
}

export interface ContactFormData {
  nombre: string;
  apellidos: string;
  ruc: string;
  empresa: string;
  telefono: string;
  email: string;
  mensaje: string;
}
