export type HomeBoxProps = {
  iconSrc: string;
  title: string;
  totalCount: string;
  updateDate: string;
};

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  maritalStatus: string;
  gender: string;
  nationality: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  imageUrl: string;
  startDate: Date;
  employeeID?: number;
  userName?: string;
  employeeType?: string;
  emailAddress?: string;
  department?: string;
  designation?: string;
  workingDays?: [];
  joinDate?: string;
  officeLocation?: string;
  appointmentLetter?: string;
  salarySlips?: string;
  relivingLetter?: string;
  experienceLetter?: string;
  stockID?: string;
  skypeID?: string;
  githubID?: string;
};
export type FormProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};
