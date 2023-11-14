export class CreateuserDto {
  name: string;
  title: string;
  dateOfBirth: Date;
  idNo: string;
  gender: string;
  nationality: string;
  ethnicity: string;
  homeCounty: string;
  postalAddress: string;
  postalCode: string;
  town: string;
  telephone: string;
  mobile: string;
  email: string;
  altContactName: string;
  altContactTelephone: string;
  hasDisability: boolean;
  disabilityDetails?: string;
  nationalRegistrationForDisabilities?: string;
} 
